import React, { useEffect } from "react";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

function TicketReservation({ setPaymentSection, setTicket, setHotel, setTotal, ticket, hotel, total }) {

  useEffect(() => {
    setHotel(null);
  }, [ticket]);

  useEffect(() => {
    const ticketValue = ticket === "Presencial" ? 250 : 100;
    const hotelValue = hotel === 'Com Hotel' ? 350 : 0;

    setTotal(ticketValue + hotelValue);
  }, [hotel]);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Subtitle visibility={1}>
        Primeiro, escolha sua modalidade de ingresso
      </Subtitle>
      <PaymentContainer display="grid">
        <Option
          selected={ticket === "Presencial" ? 1 : 0}
          onClick={() => setTicket("Presencial")}
          variant="outlined"
        >
          Presencial
          <Value>R$ 250</Value>
        </Option>
        <Option
          selected={ticket === "Online" ? 1 : 0}
          onClick={() => setTicket("Online")}
          variant="outlined"
        >
          Online
          <Value>R$ 100</Value>
        </Option>
      </PaymentContainer>

      <Subtitle visibility={ticket === "Presencial" ? 1 : 0}>
        Ótimo! Agora escolha sua modalidade de hospedagem
      </Subtitle>
      <PaymentContainer display={ticket === "Presencial" ? "grid" : 0}>
        <Option
          selected={hotel === 'Sem Hotel' ? 1 : 0}
          onClick={() => setHotel('Sem Hotel')}
          variant="outlined"
        >
          Sem Hotel
          <Value>+ R$ 0</Value>
        </Option>
        <Option
          selected={hotel === 'Com Hotel' ? 1 : 0}
          onClick={() => setHotel('Com Hotel')}
          variant="outlined"
        >
          Com Hotel
          <Value>+ R$ 350</Value>
        </Option>
      </PaymentContainer>

      <Subtitle visibility={ticket === "Online" || hotel !== null ? 1 : 0}>
        Fechado! O total ficou em <span>R$ {total}</span>. Agora é só confirmar:
      </Subtitle>
      <Book
        onClick={() => setPaymentSection(true)}
        visibility={ticket === "Online" || hotel !== null ? 1 : 0}
      >
        RESERVAR INGRESSO
      </Book>
    </>
  );
}

export default TicketReservation;

const StyledTypography = styled(Typography)`
  margin-bottom: 30px !important;
`;

const Subtitle = styled(Typography)`
  color: #8e8e8e;
  font-size: 20px !important;
  margin-bottom: 15px !important;
  display: ${(props) => (props.visibility ? "" : "none !important")};

  span {
    font-weight: bold;
  }
`;

const PaymentContainer = styled.main`
  height: 150px;
  width: 100%;
  display: ${(props) => props.display || "none"};
  grid-template-columns: repeat(5, 1fr);
  gap: 2%;
  margin-bottom: 30px;
`;

const Option = styled(Button)`
  border-radius: 20px !important;
  text-transform: none !important;
  background-color: ${(props) => (props.selected ? "#FFEED2 !important" : "")};

  span {
    display: flex;
    flex-direction: column;
  }
`;

const Value = styled(Typography)`
  color: #898989;
`;

const Book = styled(Button)`
  background-color: #e0e0e0 !important;
  display: ${(props) => (props.visibility ? "" : "none !important")};
`;
