import api from "./api";

export default class PaymentApi {
  getPaymentInfo() {
    return api.get("/payment");
  }
}
