export default function filterActivities(activities, setMainActivities, setSideActivities, setWorkshopActivities){
    const  mainRoomActivities = activities.filter((activity) => {
        if(activity.locale === 'Auditório Principal'){
            return true
        }
        return false;
    });

    const sideRoomActivities = activities.filter((activity) => {
        if(activity.locale === 'Auditório Lateral'){
            return true
        }
        return false;
    });

    const workshopRoomActivities = activities.filter((activity) => {
        if(activity.locale === 'Sala de Workshop'){
            return true
        }
        return false;
    });

    setMainActivities(mainRoomActivities);
    setSideActivities(sideRoomActivities);
    setWorkshopActivities(workshopRoomActivities);
}