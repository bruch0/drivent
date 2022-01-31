import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";
import { ScheduleContainer, RoomContainer, ActivitiesContainer } from "./scheduleStyle";
import Activity from "./Activity";
import useApi from "../../hooks/useApi";
import filterActivities from "./activitiesHandler";


export default function Schedule({day}){
    const { activity } = useApi(); 
    const [mainActivities, setMainActivities] = useState([]);
    const [sideActivities, setSideActivities] = useState([]);
    const [workshopActivities, setWorkshopActivities] = useState([]);

    useEffect(() => {
        activity.getActivitiesByDay(day)
            .then((resp) => filterActivities(resp.data, setMainActivities, setSideActivities, setWorkshopActivities))
            .catch(() => toast("Nenhuma atividade encontrada"));
    }, [day])

    return(        
            <ScheduleContainer>
                 <RoomContainer>
                    <p>Auditório Principal</p>
                    <ActivitiesContainer>
                        { mainActivities.map((el) => <Activity key={el.id} duration={el.duration} element={el} />) }
                    </ActivitiesContainer>
                </RoomContainer>
                <RoomContainer>
                    <p>Auditório Lateral</p>
                    <ActivitiesContainer>
                        { sideActivities.map((el) => <Activity key={el.id} duration={el.duration} element={el} />) }
                    </ActivitiesContainer>
                </RoomContainer>
                <RoomContainer>
                    <p>Sala de Workshop</p>
                    <ActivitiesContainer>
                        { workshopActivities.map((el) => <Activity key={el.id} duration={el.duration} element={el} />) }
                    </ActivitiesContainer>
                </RoomContainer> 
            </ScheduleContainer>        
    );
}