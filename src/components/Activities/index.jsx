import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import useApi from "../../hooks/useApi";
import { ButtonsWrapper, ActivityButton } from "./ActivityButtons";
import Schedule from "./Schedule";
import convertDateToEventFormat from "./DateHandler";

export default function ActivitiesSelection() {
  const { activity } = useApi();

  const [dates, setDates] = useState([]);
  const [day, setDay] = useState('04/02/2022');

  function getDates() {
    activity
      .getActivitiesDate()
      .then(res => {
        setDates(res.data);
      })
      .catch(error => {
        if (error.response) {
          // eslint-disable-next-line no-restricted-syntax
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível conectar ao servidor!");
        }
      });
  }

  useEffect(() => getDates(), []);

  return (
    <>
      <ActivityMsg>Primeiro, filtre pelo dia do evento: </ActivityMsg>
      <ButtonsWrapper>
        {dates.map(date => (
          <ActivityButton key={date.id}>
            {convertDateToEventFormat(date.time)}
          </ActivityButton>
        ))}
      </ButtonsWrapper>
      <Schedule day={day} setDay={setDay} />
    </>
  );
}

export const ActivityMsg = styled.p`
  color: #8e8e8e;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin: 35px 0 30px 0;
`;
