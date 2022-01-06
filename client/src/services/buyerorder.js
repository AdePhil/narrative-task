import axios from "axios";

export function getBuyerOrders() {
  return axios.get(`${process.env.VUE_APP_API_URL}/api/buyer-order/all`);
}
