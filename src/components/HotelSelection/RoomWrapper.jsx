import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RoomDetails from "./RoomDetails";
import useApi from "../../hooks/useApi";

export default function RoomWrapper() {
  const hotelId = 1;
  const { hotel } = useApi();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    hotel.getHotelRooms(hotelId).then(response => {
      if (response.status !== 200) {
        return;
      }

      setRooms(response.data);
    });
  }, []);
  return (
    <RoomLayout>
      {rooms.map(room => (
        <RoomDetails key={room.roomNumber} room={room} />
      ))}
    </RoomLayout>
  );
}

const RoomLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 5%;
`;