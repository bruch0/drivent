import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class HotelApi extends AuthenticatedApi {
  getHotelsList() {
    return api.get("/hotels/list", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  getHotelRooms(hotelId) {
    return api.get(`/hotels/bookings/${hotelId}`, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  saveBooking(body) {
    return api.post(`/hotels/bookings`, body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }

  changeRoomStatus(body) {
    return api.put(`/hotels/changeroom`, body, {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
