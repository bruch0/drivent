import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards"
import 'react-credit-cards/es/styles-compiled.css';
import Button from "../Form/Button";
import useApi from "../../hooks/useApi";
import { StyledTypography,
  Subtitle,
  TicketCard,
  Price,
  CardContainer,
  Form,
  Wrapper,
  Input,
  DateInput,
  CvcInput,
  CheckIcon,
  ConfirmationContainer,
  ConfirmationTextContainer } from "../../layouts/paymentSection"

function PaymentSection({setTicket, setHotel, setTotal, ticket, hotel, total}) {
  const { payment } = useApi();
  const [ number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');
  const [paid, setPaid] = useState(false);

  useEffect(() => {
    payment.getPaymentInfo().then((response) => {
      if (response.data.id) {
        setPaid(true);
        setTicket(response.data.ticket);
        if(response.data.hotel){
          setHotel('Com Hotel');
        }else if(response.data.ticket === 'Presencial'){
          setHotel('Sem Hotel');
        }
        setTotal(response.data.value);
      }
    });
  }, [])
  
  function confirmPayment(){
    let hotelBoolean;
    if(hotel === 'Com Hotel'){
      hotelBoolean = true;
    }else{
      hotelBoolean = false;
    }
    const paymentData = {
      ticket, 
      hotel: hotelBoolean, 
      value: total,
    };
    payment.savePaymentInfo(paymentData).then(() => {
      setPaid(true);
    });
  }  

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
      <Form onSubmit={(e) => {
        e.preventDefault();
        confirmPayment();
      } }>
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

