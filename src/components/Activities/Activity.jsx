import React from "react";
import { ActivityContainer, InfoContainer } from "./scheduleStyle";

export default function Activity({duration}){
    return(
        <ActivityContainer duration={duration}>
            <InfoContainer>
                <p>Palestra y</p>
                <span>09:00 - 10:00</span>
            </InfoContainer>
        </ActivityContainer>
    );
}