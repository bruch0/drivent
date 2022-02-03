import styled from "styled-components";

const ScheduleContainer = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  margin-top: 40px;
`;

const RoomContainer = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > p {
    font-family: "Roboto", sans-serif;
    color: #7b7b7b;
    margin-bottom: 13px;
  }
`;

const ActivitiesContainer = styled.div`
  border: 1px solid #d7d7d7;
  width: 100%;
  height: 90%;
  padding: 10px;
`;

const ActivityContainer = styled.div`
  width: 100%;
  height: ${(props) => (props.duration === 1 ? "80px" : "170px")};
  background-color: ${(props) => (props.scheduled ? "#D0FFDB" : "#f1f1f1")} ;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  cursor: ${(props) => (props.scheduled ? 'not-allowed' : 'pointer')};
`;

const InfoContainer = styled.div`
  width: 70%;
  height: 100%;
  border-right: 2px solid ${(props) => (props.scheduled ? "#99E8A1" : "#cfcfcf")};
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  color: black;
  font-size: 12px;

  p {
    font-weight: bold;
    color: black;
    margin-bottom: 5px;
  }
`;

export { ScheduleContainer, RoomContainer, ActivitiesContainer, ActivityContainer, InfoContainer };
