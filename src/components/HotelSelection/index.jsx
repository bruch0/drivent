import React, { useState, useEffect } from "react";
import styled from "styled-components";

import useApi from "../../hooks/useApi";
import HotelPreview from "./HotelPreview";
import HotelWrapper from "./HotelWrapper";

export default function HotelSelection() {
  const { hotel } = useApi();
  const [hotels, setHotels] = useState([]);
  const [selectedHotelId, setSelectedHotelId] = useState(false);

  useEffect(() => {
    hotel.getHotelsList().then((response) => {
      setHotels(response.data);
    });
  }, [selectedHotelId]);

  function selectHotel(hotelId) {
    if (selectedHotelId !== hotelId) {
      setSelectedHotelId(hotelId);
    } else {
      setSelectedHotelId(false);
    }
  }

  return (
    <>
      <HotelsContainer>
        {hotels.map((h) => (
          <HotelPreview
            key={h.id}
            data={h}
            selected={selectedHotelId === h.id}
            toggleSelection={() => selectHotel(h.id)}
          />
        ))}
      </HotelsContainer>
      {selectedHotelId ? <HotelWrapper hotelId={selectedHotelId} /> : ""}
    </>
  );
}

const HotelsContainer = styled.div`
  display: flex;
`;
