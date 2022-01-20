import styled from "styled-components";
import RoomDetails from "./RoomDetails";

export default function RoomWrapper() {
  return (
    <RoomLayout>
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
      <RoomDetails />
    </RoomLayout>
  );
}

const RoomLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 8%;
`;
