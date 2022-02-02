import React, { useState, useLayoutEffect } from "react";

import useApi from "../../../hooks/useApi";
import TicketReservation from "../../../components/Payment/Ticket";
import PaymentSection from "../../../components/Payment/PaymentSection";
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";
import Loading from "../../../components/Shared/Loading";

export default function Payment() {
  const { enrollment, payment } = useApi();

  const [enabled, setEnabled] = useState(false);
  const [paymentSection, setPaymentSection] = useState(false);
  const [paid, setPaid] = useState(false);

  const [ticket, setTicket] = useState(null);
  const [hotel, setHotel] = useState(null);
  const [total, setTotal] = useState(0);

  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    payment.getPaymentInfo().then((response) => {
      if (response.data.id) {
        setPaid(true);
      }

      enrollment.getPersonalInformations().then((res) => {
        setLoading(false);
        if (res.data.id) setEnabled(true);
      });
    });
  }, []);

  if (loading) return <Loading />;

  if (paymentSection || (paid && enabled))
    return (
      <PaymentSection
        setTicket={setTicket}
        setHotel={setHotel}
        setTotal={setTotal}
        ticket={ticket}
        hotel={hotel}
        total={total}
        setLoading={setLoading}
      />
    );

  if (enabled)
    return (
      <TicketReservation
        setPaymentSection={setPaymentSection}
        setTicket={setTicket}
        setHotel={setHotel}
        setTotal={setTotal}
        ticket={ticket}
        hotel={hotel}
        total={total}
      />
    );

  return (
    <UnauthorizedTab
      message="Você precisa completar sua inscrição antes
de prosseguir pra escolha de ingresso"
    />
  );
}
