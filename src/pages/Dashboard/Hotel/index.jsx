
import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';
import UnauthorizedTab from "../../../components/Shared/UnauthorizedTab";
import useApi from "../../../hooks/useApi";

export default function Hotel() {
  const { payment } = useApi();

  payment.getPaymentInfo().then((response) =>{
    if(response.status === 204){
      return (
          <>
              <StyledTypography variant="h4">Escolha de hotel e quarto</StyledTypography>
              <UnauthorizedTab
              message="Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem"/>
          </>);
  } return 'Escolha de Hotel'
}
  )

 
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;