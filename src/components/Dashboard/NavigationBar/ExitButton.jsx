import React from "react";
import styled from "styled-components";

export default function ExitButton() {
  function logout() {
    localStorage.removeItem("userData");
    window.location.reload();
  }

  return <ExitButtonWrapper onClick={() => logout()}>Sair</ExitButtonWrapper>;
}

const ExitButtonWrapper = styled.div`
  cursor: pointer;
  color: white;
  border-radius: 6px;
  background-color: #124090e2;
  padding: 5px 5px;
  text-align: center;
  align-self: center;
  margin: 0 6%;
  position: absolute;
  bottom: 2.5%;
  left: 0;
  right: 0;

  @media (max-width: 600px) {
    position: relative;
    margin: 0 2%;
    padding: 2.5% 2.5%;
  }
`;
