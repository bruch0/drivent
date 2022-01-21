import styled from "styled-components";
import { BsPerson, BsPersonFill } from "react-icons/bs";

export default function RoomDetails({
  room: { roomNumber, available, unavailable },
}) {
  return (
    <RoomContainer>
      <RoomInfoWrapper>
        <RoomNumber>{roomNumber}</RoomNumber>
        <BookingWrapper>
          <BsPerson size={25} />
          <BsPerson size={25} />
          <BsPersonFill size={25} />
        </BookingWrapper>
      </RoomInfoWrapper>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #cecece;
  display: flex;
  height: 45px;
  justify-content: center;
  margin: 0 15px 8px 0;
  width: 190px;
`;

const RoomInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 85%;
`;

const RoomNumber = styled.div`
  color: #454545;
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
`;

const BookingWrapper = styled.div``;
