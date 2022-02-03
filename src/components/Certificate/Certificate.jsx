import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import EventInfoContext from "../../contexts/EventInfoContext";
import useApi from "../../hooks/useApi";

export default function Certificate() {
  const { eventInfo } = useContext(EventInfoContext);
  const { enrollment, payment } = useApi();

  const [mode, setMode] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    payment.getPaymentInfo().then(response => {
      setMode(response.data.ticket);
    });
    enrollment.getPersonalInformations().then(response => {
      setName(response.data.name);
    });
  }, []);

  return (
    <CertificateWrapper>
      <CertificateContent>
        <EventLogo image={eventInfo.logoImage} alt='Event Logo' />
        <CertificateTitle>Certificado de Participação</CertificateTitle>
        <CertificateText>
          Certifica-se que {name} participou do evento {eventInfo.eventTitle}{" "}
          com duração de 8 horas, no modo {mode.toLowerCase()}.
        </CertificateText>
      </CertificateContent>
    </CertificateWrapper>
  );
}

const CertificateWrapper = styled.div`
  background-color: #fa4098;
  border-radius: 5px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CertificateContent = styled.div`
  background-color: #fff;
  height: 92%;
  width: 95%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  font-family: "Arial";
`;

const EventLogo = styled.img.attrs(props => ({ src: props.image }))`
  width: 20%;
  height: 20%;
`;

const CertificateTitle = styled.h1`
  font-size: 48px;
`;

const CertificateText = styled.p`
  font-size: 24px;
  text-align: center;
  margin: 0 10px 0 10px;
`;
