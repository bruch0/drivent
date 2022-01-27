import styled from "styled-components";
import { IoCheckmarkCircle } from "react-icons/io5"
import Typography from "@material-ui/core/Typography";
import InputMask from "react-input-mask";

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

const Input = styled(InputMask)`
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

  &:hover{
    border-color: black;
  }

  &:Focus{
    border: 2px solid #112ebf;
  }
`

const DateInput = styled(InputMask)`
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

  &:hover{
    border-color: black;
  }

  &:Focus{
    border: 2px solid #112ebf;
  }

`

const CvcInput =  styled(InputMask)`
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

  &:hover{
    border-color: black;
  }

  &:Focus{
    border: 2px solid #112ebf;
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

export { 
    StyledTypography,
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
    ConfirmationTextContainer,
}