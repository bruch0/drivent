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
}
