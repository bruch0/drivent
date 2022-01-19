import React from "react";

import styled from "styled-components";

function UnauthorizedTab({ message }) {
  return <MessageHolder>{message}</MessageHolder>;
}

export default UnauthorizedTab;

const MessageHolder = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20%;
  color: #8e8e8e;
  font-size: 20px;
  text-align: center;
`;
