import React from "react";
import { ScheduleContainer, RoomContainer, ActivitiesContainer } from "./scheduleStyle";
import Activity from "./Activity";

export default function Schedule(){
    return(
        
            <ScheduleContainer>
                <RoomContainer>
                    <p>Auditório Principal</p>
                    <ActivitiesContainer>
                        <Activity duration={1}>teste</Activity>
                        <Activity duration={1}>teste</Activity>
                    </ActivitiesContainer>
                </RoomContainer>
                <RoomContainer>
                    <p>Auditório Lateral</p>
                    <ActivitiesContainer>
                        <Activity duration={2}>teste</Activity>
                    </ActivitiesContainer>
                </RoomContainer>
                <RoomContainer>
                    <p>Sala de Workshop</p>
                    <ActivitiesContainer>
                        <Activity duration={1}>teste</Activity>
                        <Activity duration={1}>teste</Activity>
                    </ActivitiesContainer>
                </RoomContainer>
            </ScheduleContainer>
        
    );
}