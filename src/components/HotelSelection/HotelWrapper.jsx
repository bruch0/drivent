import React from "react";

import { RoomMsg } from "./RoomMsg";
import RoomWrapper from "./RoomWrapper";

export default function HotelWrapper(props) {
  const { hotelId } = props;
  return (
    <>
      <RoomMsg>Ótima pedida! Agora escolha seu quarto:</RoomMsg>
      <RoomWrapper hotelId={hotelId} />
    </>
  );
}
