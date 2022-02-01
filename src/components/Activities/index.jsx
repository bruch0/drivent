import React, { useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { ButtonsWrapper, ActivityButton } from "./ActivityButtons";
import Schedule from "./Schedule";

export default function ActivitiesSelection() {
  const dates = ["04/02/2022", "05/02/2022", "06/02/2022"];
  const [day, setDay] = useState("2022/02/04");
  const [selected, setSelected] = useState(1);

  return (
    <>
      <ActivityMsg>Primeiro, filtre pelo dia do evento: </ActivityMsg>
      <ButtonsWrapper>
        <ActivityButton
          onClick={() => {
            setDay(dayjs(dates[0]).format("YYYY/DD/MM"));
            setSelected(1);
          }}
          selected={selected === 1}
        >
          Sexta, 04/02
        </ActivityButton>
        <ActivityButton
          onClick={() => {
            setDay(dayjs(dates[1]).format("YYYY/DD/MM"));
            setSelected(2);
          }}
          selected={selected === 2}
        >
          Sábado, 05/02
        </ActivityButton>
        <ActivityButton
          onClick={() => {
            setDay(dayjs(dates[2]).format("YYYY/DD/MM"));
            setSelected(3);
          }}
          selected={selected === 3}
        >
          Domingo, 06/02
        </ActivityButton>
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
