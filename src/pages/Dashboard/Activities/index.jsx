import React, { useState } from "react";

import StyledTypography from "@material-ui/core/Typography";

import useApi from "../../../hooks/useApi";
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";
import Loading from "../../../components/Shared/Loading";

import ActivitiesSelection from "../../../components/Activities";

export default function Activities() {
  const { payment } = useApi();
  const [paid, setPaid] = useState(false);
  const [onlineTicket, setOnlineTicket] = useState(false);
  const [loading, setLoading] = useState(true);

  payment.getPaymentInfo().then(response => {
    if (response.data?.id) setPaid(true);
    if (response.data?.ticket === "Online") setOnlineTicket(true);

    setLoading(false);
  });

  if (loading) return <Loading />;

  if (!paid)
    return (
      <UnauthorizedTab
        message='Você precisa ter confirmado pagamento antes
de fazer a escolha de atividades'
      />
    );

  if (onlineTicket)
    return (
      <UnauthorizedTab
        message='Sua modalidade de ingresso não necessita escolher
atividade. Você terá acesso a todas as atividades.'
      />
    );

  return (
    <>
      <StyledTypography variant='h4'>Escolha de atividades</StyledTypography>
      <ActivitiesSelection />
    </>
  );
}
