import React from "react";
import styled from "styled-components";
import RoomDetails from "./RoomDetails";

export default function RoomWrapper({ rooms, bookingRoom, selectedRoom }) {

  return (
    <RoomLayout>
      {rooms.map((room) => (
        <RoomDetails key={room.roomNumber} room={room} selected={selectedRoom} bookingRoom={bookingRoom} />
      ))}
    </RoomLayout>
  );
}

const RoomLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 5%;
`;
