import React from "react";

import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

function PaymentSection() {
  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <Subtitle visibility={1}>Ingresso escolhido</Subtitle>
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
