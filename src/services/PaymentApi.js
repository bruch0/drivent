import api from "./api";
import AuthenticatedApi from "./AuthenticatedApi";

export default class PaymentApi extends AuthenticatedApi {
  getPaymentInfo() {
    return api.get("/payments", {
      headers: {
        ...this.getAuthorizationHeader(),
      },
    });
  }
}
