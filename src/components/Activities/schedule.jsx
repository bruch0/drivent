import { React} from "react";
// import { toast } from "react-toastify";
import { ScheduleContainer, RoomContainer, ActivitiesContainer } from "./scheduleStyle";
import Activity from "./Activity";
// import useApi from "../../hooks/useApi";


export default function Schedule(){
    // const { activity } = useApi();
    // const [activities, setActivities] = useState([]);

    // useEffect(() => {
    //     activity.getActivitiesByDay(day)
    //         .then((resp) => setActivities(resp.data))
    //         .catch(() => toast('Erro de conexão com o servidor'))
    // }, []);

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