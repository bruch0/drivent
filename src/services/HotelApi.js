import api from "./api";

export default class HotelApi {
  getHotelInfo() {
    return api.get("/hotel");
  }
}
