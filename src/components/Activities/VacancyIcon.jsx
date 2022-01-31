import React from "react";

import styled from "styled-components";
import { BsBoxArrowInRight, BsXCircle } from "react-icons/bs";

export default function VacancyIcon({ vacancy }) {
  const isFull = vacancy === 0;

  return (
    <VacancyButtonWrapper isFull={isFull}>
      {isFull ? <EventFullIcon /> : <EnterIcon />}
      {isFull ? <p>Esgotado</p> : <p>{vacancy} vagas</p>}
    </VacancyButtonWrapper>
  );
}

const VacancyButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 10px;
  color: ${(props) => (props.isFull ? "red" : "green")};
  font-size: 28px;
  height: 100%;

  & > p {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const EnterIcon = styled(BsBoxArrowInRight)``;

const EventFullIcon = styled(BsXCircle)``;
