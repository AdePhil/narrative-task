import Axios from "../config/axios";

export function getBuyerOrders() {
  return Axios.get(`/buyer-orders`).then((res) => res.data);
}

export function saveBuyerOrder(payload) {
  return Axios.post(`/buyer-orders`, payload);
}

export function updateBuyerOrder(id, payload) {
  return Axios.patch(`/buyer-orders/${id}`, payload);
}

export function deleteBuyerOrder(id) {
  return Axios.delete(`/buyer-orders/${id}`);
}

export function getDataPackageType() {
  return Axios.get(`/package-types/`).then((res) => res.data);
}
