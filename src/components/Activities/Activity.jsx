import React from "react";
import { toast } from "react-toastify";
import { ActivityContainer, InfoContainer } from "./scheduleStyle";
import convertTime from "./timeHandler";
import VacancyIcon from "./VacancyIcon";
import useApi from "../../hooks/useApi";


export default function Activity({ duration, element }) {
  const { activity } = useApi();

  function subscribeActivity() {
    activity.postNewActivity(element.id).then(() => {
    }).catch((error) => {
      if (error.response) {
        // eslint-disable-next-line no-restricted-syntax
        for (const detail of error.response.data.details) {
          toast(detail);
        }
      } else {
        toast("Não foi possível conectar ao servidor!");
      }
    })
  }

  return (
    <ActivityContainer duration={duration} onClick={() => subscribeActivity()}>
      <InfoContainer>
        <p>{element.name}</p>
        <span>
          {convertTime(element.time)}:00 - {Number(convertTime(element.time)) + duration}:00
        </span>
      </InfoContainer>
      <VacancyIcon vacancy={element.vacancies} />
    </ActivityContainer>
  );
}
