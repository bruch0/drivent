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
  border: 2px solid pink;
  color: white;
  border-radius: 6px;
  background-color: #fa4797c0;
  padding: 5px 5px;
  text-align: center;
  align-self: center;
  margin: 0 5%;
  position: absolute;
  bottom: 2.5%;
  left: 0;
  right: 0;

  @media (max-width: 600px) {
    display: inline-block;
    position: relative;
  }
`;
