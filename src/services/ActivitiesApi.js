import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class ActivitiesApi extends AuthenticatedApi {
  getActivitiesDate() {
    return api.get("/activities/dates", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getActivitiesByDay(time) {
    return api.get("/activities/activities", {
      headers: {
        ...this.getAuthorizationHeader(),
        Time1: `${time} 09:00:00`,
        Time2: `${time} 10:00:00`,
      },
    });
  }

  postNewActivity(id){
    const body = {
      activityId: id
    }
    return api.post("/activities/subscribe", body, {
      headers: {
        ...this.getAuthorizationHeader(),
      }
    })
  }
}
