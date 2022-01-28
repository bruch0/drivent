import React from "react";

import styled from "styled-components";
import { BsBoxArrowInRight, BsXCircle } from "react-icons/bs";

// TO-DO vacancy mockado, é melhor receber a vacância via props do pai pra nao ter que fazer outra requisicao pra API
export default function VacancyIcon({ vacancy = 0 }) {
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
  padding: 10px 10px;
  color: ${(props) => (props.isFull ? "red" : "green")};
  font-size: 28px;
  width: 100%;
  height: 100%;

  & > p {
    font-size: 9px;
    margin-top: 5px;
  }
`;

const EnterIcon = styled(BsBoxArrowInRight)``;

const EventFullIcon = styled(BsXCircle)``;
