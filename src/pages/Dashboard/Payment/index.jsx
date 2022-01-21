import React, { useState } from "react";

import useApi from "../../../hooks/useApi";
import TicketReservation from "../../../components/Payment/Ticket";
import PaymentSection from "../../../components/Payment/PaymentSection";
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";

export default function Payment() {
  const { enrollment } = useApi();

  const [enabled, setEnabled] = useState(false);
  const [paymentSection, setPaymentSection] = useState(false);

  const [ticket, setTicket] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [total, setTotal] = useState(0);

  enrollment.getPersonalInformations().then((response) => {
    if (response.data.id) setEnabled(true);
  });

  if (paymentSection) return <PaymentSection ticket={ticket} hotel={hotel} total={total} />;

  if (enabled)
    return <TicketReservation setPaymentSection={setPaymentSection} setTicket={setTicket} setHotel={setHotel} setTotal={setTotal} ticket={ticket} hotel={hotel} total={total} />;

  return (
    <UnauthorizedTab
      message="Você precisa completar sua inscrição antes
de prosseguir pra escolha de ingresso"
    />
  );
}
