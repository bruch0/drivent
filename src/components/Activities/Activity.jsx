import React, { useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from 'sweetalert2'
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
    if (isScheduled) return
    Swal.fire({
      title: 'Você tem certeza que deseja se inscrever nessa atividade?',
      text: "Essa ação não pode ser desfeita.",
      showCancelButton: true,
      confirmButtonColor: '#fa4697',
      cancelButtonColor: '#ffd57f',
      confirmButtonText: 'Me inscrever!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
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
    })
  }

  return (
    <ActivityContainer scheduled={isScheduled} duration={duration} onClick={() => subscribeActivity()}>
      <InfoContainer scheduled={isScheduled}>
        <p>{element.name}</p>
        <span>
          {convertTime(element.time)}:00 - {Number(convertTime(element.time)) + duration}:00
        </span>
      </InfoContainer>
      <VacancyIcon vacancy={element.vacancies} isRegistered={isScheduled} />
    </ActivityContainer>
  );
}
