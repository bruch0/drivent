import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Certificate from "./Certificate";

export default function CertificateFrame() {
  const { userData } = useContext(UserContext);
  const userId = userData.user.id;

  return (
    <FrameWrapper>
      <Frame>
        <Certificate />
      </Frame>
      <PrintButton
        onClick={() =>
          window.open(
            `https://drivent--api.herokuapp.com/certificate/${userId}`
          )
        }
      >
        Baixar Certificado
      </PrintButton>
    </FrameWrapper>
  );
}

const Frame = styled.div`
  height: 90%;
  width: 100%;
`;

const FrameWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;

const PrintButton = styled.button`
  background-color: #124090e2;
  border: none;
  color: #fff;
  border-radius: 10px;
  width: 30%;
  height: 7%;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;
