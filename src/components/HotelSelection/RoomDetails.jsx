/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, {useEffect, useState} from "react";

import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";

function getVacancy(available, unavailable) {
  const roomVacancy = [];

  for (let i = 0; i < available; i += 1) {
    roomVacancy.push(true);
  }

  for (let i = 0; i < unavailable; i += 1) {
    roomVacancy.push(false);
  }

  return roomVacancy;
}

export default function RoomDetails({
  room, selected, bookingRoom, 
}) {
  const  { roomNumber, available, unavailable} = room  
  const [vacancies, setVacancies] = useState(getVacancy(available, unavailable))

  useEffect(()=>{ // get vacancies
    const updateSelected = () => {
      const isSelected = selected === roomNumber

      if (isSelected) {
        setVacancies(getVacancy(available - 1, unavailable + 1))
        bookingRoom(selected)
      } else {
        setVacancies(getVacancy(available, unavailable))
      } 
    }

    updateSelected()
  }, [selected, available, unavailable])

  
  return (
    <>
      {
        (available === 0)
        ?         
        <RoomContainer disabled >
          <RoomInfoWrapper>
            <RoomNumber disabled>{roomNumber}</RoomNumber>
            <BookingWrapper>
              {vacancies.map(()=><BsPersonFill color="#9d9d9d" size={25} />)}
            </BookingWrapper>
          </RoomInfoWrapper>
        </RoomContainer>
        :           
        <RoomContainer onClick={()=>bookingRoom(roomNumber)} isSelected={selected === roomNumber}>
          <RoomInfoWrapper>
            <RoomNumber>{roomNumber}</RoomNumber>
            <BookingWrapper >
              {vacancies.map((availability, i) =>
              availability 
              ? <BsPerson size={25} /> 
              : <BsPersonFill 
                  color={(selected === roomNumber && i === (available - 1)) ? "#FF4791" : "#000000"} 
                  size={25} 
                />
              )}
            </BookingWrapper>
          </RoomInfoWrapper>
        </RoomContainer>
      }
      </>
  );
}

const RoomContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #cecece;
  cursor: ${props=> props.disabled ? 'default' : 'pointer'};
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 0 15px 8px 0;
  width: 190px;
  background-color: ${(props) => {
    if (props.disabled) return '#E9E9E9'
    if (props.isSelected) return '#FFEED2'
    return '#FFFFFF'
  }};
`;

const RoomInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

const RoomNumber = styled.div`
  color: ${(props) => props.disabled ? "#9D9D9D" : "#454545"};
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

const BookingWrapper = styled.div`
  
  color: ${(props) => props.children.isSelected ? "#FF4791" : "#000000"};
  
`;
