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

    p{
        font-family: 'Roboto', sans-serif;
        color: #7B7B7B;
        margin-bottom: 13px;
    }
`

const ActivitiesContainer = styled.div`
    border: 1px solid #D7D7D7;
    width: 100%;
    height: 90%;
    padding: 10px;
`

const ActivityContainer = styled.div`
    width: 100%;
    height: ${props => props.duration === 1 ? '80px' : '170px'};
    background-color: #F1F1F1;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 10px;
    display: flex;
`;

const InfoContainer = styled.div`
    width: 70%;
    height: 100%;
    border-right: 2px solid #CFCFCF;
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    color: black;
    font-size: 12px;

    p{
        font-weight: bold;
        color: black;
    }
`

export{
    ScheduleContainer,
    RoomContainer,
    ActivitiesContainer,
    ActivityContainer,
    InfoContainer,
}