import React from "react";
import { ActivityContainer, InfoContainer } from "./scheduleStyle";
import convertTime from "./timeHandler";

export default function Activity({duration, element}){
    return(
        <ActivityContainer duration={duration}>
            <InfoContainer>
                <p>{element.name}</p>
                <span>{convertTime(element.time)}:00 - {Number(convertTime(element.time))+duration}:00</span>
            </InfoContainer>
        </ActivityContainer>
    );
}