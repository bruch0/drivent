import React from "react";
import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "../../assets/loading.svg";

export default function Loading() {
  return (
    <Main>
      <BigLoading />
    </Main>
  );
}

const BigLoading = styled(LoadingIcon)`
  width: 35%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
