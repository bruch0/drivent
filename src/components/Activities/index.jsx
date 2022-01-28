import React from "react";
import styled from "styled-components";

export default function ActivitiesSelection() {
  return (
    <>
      <ActivityMsg>Primeiro, filtre pelo dia do evento: </ActivityMsg>
      <ButtonsWrapper>
        <ActivityButton>22/10</ActivityButton>
        <ActivityButton>22/10</ActivityButton>
      </ButtonsWrapper>
    </>
  );
}

export const ActivityMsg = styled.p`
  color: #8e8e8e;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin: 35px 0 30px 0;
`;

export const ActivityButton = styled.button`
  background-color: #e0e0e0;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  height: 37px;
  margin-right: 15px;
  width: 131px;
`;

export const ButtonsWrapper = styled.div``;
