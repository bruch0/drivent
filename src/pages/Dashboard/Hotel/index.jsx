import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const { payment } = useApi();
  let message;

  const [enabled, setEnabled] = useState(false);
  const [enrollmentWithHotel, setEnrollmentWithHotel] = useState(false);

  payment.getPaymentInfo().then((response) => {
    if (response.data.id) {
      setEnabled(true);
      if (response.data.hotel) setEnrollmentWithHotel(true);
    }
  });

  if (enabled) {
    if (!enrollmentWithHotel) {
      message =
        "Sua modalidade de ingresso não inclui hospedagem. Prossiga para a escolha de atividades";
    }
  } else {
    message = "Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem";
  }

  return (
    <>
      <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
      {enabled && enrollmentWithHotel ? (
        "Prosseguir para Página de hotel"
      ) : (
        <UnauthorizedTab message={message} />
      )}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 30px !important;
`;
