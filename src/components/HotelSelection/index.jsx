/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import useApi from "../../hooks/useApi";
import HotelPreview from "./HotelPreview";
import HotelWrapper from "./HotelWrapper";

export default function HotelSelection() {
  const { hotel } = useApi();

  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(null);

  const [ rooms, setRooms ] = useState([]);
  const [ selectedRoom, setSelectedRoom ] = useState(null)

  const [confirmReservation, setConfirmReservation] = useState(false)

  function selectHotel(hotelId) {
    if (selectedHotelId !== hotelId) {
      setSelectedHotelId(hotelId);
    } else {
      setSelectedHotelId(null);
    }
  }

  const selectHotelRoom = (roomNumber) => {
    setSelectedRoom(roomNumber)
  }

  const confirmBooking = () => {
    console.log("here")
      const body = {
        hotel: selectedHotelId,
        room: selectedRoom,
      }
      console.log({body})
      hotel.saveBooking(body).then(()=>{
        setConfirmReservation(true)
        console.log("then")
      }).catch((error) => {
        console.log("error")
        if (error.response) {
          // eslint-disable-next-line no-restricted-syntax
          for (const detail of error.response.data.details) {
            toast(detail);
          }
        } else {
          toast("Não foi possível conectar ao servidor!");
        }
      }).finally(()=>{
        console.log("finally")
        selectHotel(null)
      })
  }

  useEffect(() => { // get hotels
    function setHotelList(){
      hotel.getHotelsList().then((response) => {
        setHotels(response.data);
      });
    }
    setHotelList();
  }, []);

  useEffect(() => { // get rooms
    setSelectedRoom(null);

    function setHotelRooms(){
      if(selectedHotelId){
        hotel.getHotelRooms(selectedHotelId).then((response) => {
          if (response.status !== 200) {
            return;
          }
          setRooms(response.data);
        });
      }      
    }
    setHotelRooms()
  }, [selectedHotelId])

  return (
    <>
      {confirmReservation
        ? 
        <>
        </>
        : 
        <>
          <HotelsContainer>
            {hotels.map((h) => (
              <HotelPreview
                key={h.id}
                data={h}
                toggleSelection={() => selectHotel(h.id)}
                selected={selectedHotelId}
              />
            ))}
          </HotelsContainer>
          {selectedHotelId &&  
            <> 
              <HotelWrapper rooms={rooms} selectHotelRoom={selectHotelRoom} selectedRoom={selectedRoom}/> 
              <ConfirmReserveButton onClick={confirmBooking} enabled={!!selectedRoom}>RESERVAR QUARTO</ConfirmReserveButton>
            </>
          }      
        </> 
      }
    </>    
  );
}

const ConfirmReserveButton = styled.div`
  width: 182px;
  height: 37px;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
  font-size: 14px;
`

const HotelsContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`;
