import React from "react";

import styled from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5"
import Typography from "@material-ui/core/Typography";
import Cards from "react-credit-cards"
import 'react-credit-cards/es/styles-compiled.css';
import Button from "../Form/Button";

function PaymentSection({ticket, hotel, total}) {
  const [ number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [expiry, setExpiry] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [focus, setFocus] = React.useState('');
  const [paid, setPaid] = React.useState(false);

  

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Subtitle visibility={1}>Ingresso escolhido</Subtitle>
      <TicketCard>
        {!hotel ? <p> {ticket} </p> : <p> {ticket} + {hotel} </p>}
        <Price>R$ {total}</Price>
      </TicketCard>
      <Subtitle visibility={1}>Pagamento</Subtitle>
      {!paid ?
      <CardContainer>
      <div>
      <Cards 
        number = {number}
        name = {name}
        expiry = {expiry}
        cvc = {cvc}
        focused = {focus}
      />
      </div>
      <Form onSubmit={() => setPaid(true)}>
        <Input type="text" name='number' placeholder="Card Number" value={number} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)} maxLength={16} required />
        <Input type="text" name='name' placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)} required />
        <Wrapper>
          <DateInput type="text" name='expiry' placeholder="Valid Thru (MM/YY)" value={expiry} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)} maxLength={4} required />
          <CvcInput type="tel" name='cvc' placeholder="CVC" value={cvc} onChange={(e) => setCvc(e.target.value)} onFocus={(e) => setFocus(e.target.name)} maxLength={3} required />
        </Wrapper>
        <Button type='submit'>Finalizar Pagamento</Button>
      </Form>
    </CardContainer>  : 
    <ConfirmationContainer>
      <CheckIcon />
      <ConfirmationTextContainer>
        <p>Pagamento confirmado!</p>
        <span>Prossiga para escolha de hospedagem e atividades</span>
      </ConfirmationTextContainer>
    </ConfirmationContainer>
    }
    </>
  );
}

export default PaymentSection;

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

const TicketCard = styled.div`
  background-color: #FFEED2;
  width: 30%;
  height: 110px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  color: #454545;
  margin-bottom: 30px;
`
const Price = styled.p`
  color: #898989;
  margin-top: 12px;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 23px;
`

const Form = styled.form` 
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  width: 50%;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #C4C4C4;
  padding: 14px;
  font-size: 20px;

  &::placeholder{
    color: #a1a1a1;
  }
`

const DateInput = styled.input`
  margin-top: 10px;
  width: 60%;
  height: 60px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #C4C4C4;
  padding: 14px;
  font-size: 20px;

  &::placeholder{
    color: #a1a1a1;
  }  

`

const CvcInput =  styled.input`
  margin-top: 10px;
  width: 35%;
  height: 60px;
  border-radius: 5px;
  outline: none;
  border: solid 1px #C4C4C4;
  padding: 14px;
  font-size: 20px;

  &::placeholder{
    color: #a1a1a1;
  }  
`

const CheckIcon = styled(IoCheckmarkCircle)`
  color: #48B854;
  font-size: 44px;
`

const ConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
`

const ConfirmationTextContainer = styled.div`
  color: #454545;
  font-family: 'Roboto';
  margin-left: 20px;
  font-size: 16px;

  p{
    font-weight: bold;
    margin-bottom: 5px;
  }
`