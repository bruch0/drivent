import React, { useState } from "react";

import useApi from "../../../hooks/useApi";
import TicketReservation from "../../../components/Payment/Ticket";

import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";

export default function Payment() {
  const { enrollment } = useApi();

  const [enabled, setEnabled] = useState(false);

  enrollment.getPersonalInformations().then((response) => {
    if (response.data.id) setEnabled(true);
  });

  if (enabled) return <TicketReservation />;

  return (
    <UnauthorizedTab
      message="Você precisa completar sua inscrição antes
de prosseguir pra escolha de ingresso"
    />
  );
}
