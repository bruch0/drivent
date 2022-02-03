import React from "react";
import styled from "styled-components";
import Certificate from "./Certificate";

export default function CertificateFrame() {
  return (
    <FrameWrapper>
      <Frame>
        <Certificate />
      </Frame>
    </FrameWrapper>
  );
}

const Frame = styled.div`
  height: 90%;
  width: 100%;
  border-style: inset;
  border-color: #000;
`;

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
