import React, { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import { ActivityContainer, InfoContainer } from "./scheduleStyle";
import convertTime from "./timeHandler";
import VacancyIcon from "./VacancyIcon";
import useApi from "../../hooks/useApi";


export default function Activity({ duration, element }) {
  const [isScheduled, setIsScheduled] = useState(false)
  const { activity } = useApi();


  useLayoutEffect(() => {
    activity.getActivityStatus(element.id).then((res) => {
      const { isRegistered } = res.data;
      setIsScheduled(isRegistered)
    }).catch(() => {
      // do nothing
    })
  }, [])

  function subscribeActivity() {
    activity.postNewActivity(element.id).then(() => {
      setIsScheduled(true)
      toast("Inscrito");
    }).catch((error) => {
      if (error.response.status === 409) {
        toast("Não foi possível se inscrever: choque de horário!")
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
      <VacancyIcon vacancy={element.vacancies} isRegistered={isScheduled} />
    </ActivityContainer>
  );
}
