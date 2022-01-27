import React from "react";
import styled from "styled-components";

export default function HotelSelected() {
  return (
    <HotelSelectedWrapper>
      <ChangeRoomButton>TROCAR DE QUARTO</ChangeRoomButton>
    </HotelSelectedWrapper>
  );
}

const HotelSelectedWrapper = styled.div``;

const ChangeRoomButton = styled.button`
  background-color: #e0e0e0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  height: 37px;
  width: 182px;

  &:hover {
    cursor: pointer;
  }
`;
