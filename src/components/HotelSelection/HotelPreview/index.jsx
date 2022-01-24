import React from "react";
import styled from "styled-components";

export default function HotelPreview(props) {
  const { data, selected, toggleSelection } = props;
  return (
    <HotelPreviewWrapper selected={selected} onClick={toggleSelection}>
      <Banner src={data.imageUrl} />
      <HotelName>{data.name}</HotelName>
      <HotelDetails>
        <div>
          <strong>Tipos de acomodação</strong>
          <p>{data.roomTypes}</p>
        </div>
        <div>
          <strong>Vagas Disponíveis</strong>
          <p>{data.vacancy}</p>
        </div>
      </HotelDetails>
    </HotelPreviewWrapper>
  );
}

const HotelPreviewWrapper = styled.div`
  margin-right: 20px;
  width: 196px;
  background-color: ${(props) => (props.selected ? "#FFEED2" : "#f1f1f1")};
  padding: 15px;
  cursor: pointer;
`;

const Banner = styled.img`
  width: 168px;
  height: 109px;
`;

const HotelName = styled.h1`
  font-size: 20px;
  font-weight: 400;
`;

const HotelDetails = styled.div`
  font-size: 15px;
  & > div {
    margin: 10px 0px;
  }
`;
