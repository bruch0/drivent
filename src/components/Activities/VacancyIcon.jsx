/* eslint-disable no-nested-ternary */
import React from "react";

import styled from "styled-components";
import { BsBoxArrowInRight, BsXCircle, BsCheckCircle } from "react-icons/bs";

export default function VacancyIcon({ vacancy, isRegistered }) {
  const isFull = vacancy === 0;

  return (
    <VacancyButtonWrapper isRegistered={isRegistered} isFull={isFull}>
      {isRegistered ? <BsCheckCircle /> : (isFull ? <EventFullIcon /> : <EnterIcon />)}
      {isRegistered ? <p>Inscrito</p> : (isFull ? <p>Esgotado</p> : <p>{vacancy} vagas</p>)}
    </VacancyButtonWrapper>
  );
}

const VacancyButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: ${(props) => (props.isRegistered ? "12px" : '4px')};
  padding: 2px 10px;
  color: ${(props) => ((!props.isFull || props.isRegistered) ? "green" : "red")};
  font-size: ${(props) => (props.isRegistered ? "24px" : "28px")};
  height: 100%;

  & > p {
    font-size: 10px;
    margin-top: 5px;
  }
`;

const EnterIcon = styled(BsBoxArrowInRight)``;

const EventFullIcon = styled(BsXCircle)``;
