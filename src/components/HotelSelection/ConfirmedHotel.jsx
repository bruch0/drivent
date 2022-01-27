import React from "react";
import styled from "styled-components";

export default function ConfirmedHotel({ bookingDetails }) {
  const {
    imageUrl,
    name,
    roomType: roomCapacity,
    roomNumber,
    confirmedCompanions,
  } = bookingDetails;

  const roomTypes = {
    1: "Single",
    2: "Double",
    3: "Triple",
  };

  return (
    <ReservationDetails>
      <h4>Você já escolheu seu quarto:</h4>

      <HotelPreviewWrapper>
        <Banner src={imageUrl} />
        <HotelName>{name}</HotelName>
        <HotelDetails>
          <div>
            <strong>Quarto reservado</strong>
            <p>{`${roomNumber} (${roomTypes[roomCapacity]})`}</p>
          </div>
          <div>
            <strong>Pessoas no seu quarto</strong>
            <p>{`${
              confirmedCompanions > 0 ? `Você e mais ${confirmedCompanions}` : "Somente você"
            }`}</p>
          </div>
        </HotelDetails>
      </HotelPreviewWrapper>
    </ReservationDetails>
  );
}

const ReservationDetails = styled.div`
  font-family: "Roboto";
  h4 {
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
const HotelPreviewWrapper = styled.div`
  margin: 14px 20px 0 0;
  width: 196px;
  background-color: #ffeed2;
  padding: 15px;
  border-radius: 10px;
`;

const Banner = styled.img`
  width: 168px;
  height: 109px;
  border-radius: 5px;
`;

const HotelName = styled.h1`
  font-size: 20px;
  font-weight: 400;
  margin-top: 10px;
`;

const HotelDetails = styled.div`
  font-size: 13px;
  line-height: 15px;
  & > div {
    margin: 10px 0px;
  }
`;
