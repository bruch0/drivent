import React, { useState } from "react";

import useApi from "../../../hooks/useApi";
import TicketReservation from "../../../components/Payment/Ticket";
import PaymentSection from "../../../components/Payment/PaymentSection";
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";

export default function Payment() {
  const { enrollment } = useApi();

  const [enabled, setEnabled] = useState(false);
  const [paymentSection, setPaymentSection] = useState(false);

  enrollment.getPersonalInformations().then((response) => {
    if (response.data.id) setEnabled(true);
  });

  if (paymentSection) return <PaymentSection />;

  if (enabled)
    return <TicketReservation setPaymentSection={setPaymentSection} />;

  return (
    <UnauthorizedTab
      message="Você precisa completar sua inscrição antes
de prosseguir pra escolha de ingresso"
    />
  );
}
