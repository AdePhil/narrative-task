import Axios from "../config/axios";

export function getBuyOrders() {
  return Axios.get(`/buyer-orders`);
}

export function saveBuyOrder(payload) {
  return Axios.post(`/buyer-orders`, payload);
}

export function updateBuyOrder(id, payload) {
  return Axios.patch(`/buyer-orders/${id}`, payload);
}

export function deleteBuyOrder(id) {
  return Axios.delete(`/buyer-orders/${id}`);
}

export function getDataPackageType() {
  return Axios.get(`/package-types/`);
}
