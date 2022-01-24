import React from "react";

import { RoomMsg } from "./RoomMsg";
import RoomWrapper from "./RoomWrapper";

export default function HotelWrapper({ rooms, selectHotelRoom, selectedRoom }) {
  return (
    <>
      <RoomMsg>Ótima pedida! Agora escolha seu quarto:</RoomMsg>
      <RoomWrapper rooms={rooms}  bookingRoom={selectHotelRoom} selectedRoom={selectedRoom}/>
    </>
  );
}
