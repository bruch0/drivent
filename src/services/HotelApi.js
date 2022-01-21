import api from "./api";

export default class HotelApi {
  getHotelRooms(hotelId) {
    return api.get(`/hotels/bookings/${hotelId}`);
  }
}
