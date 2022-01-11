import Axios from "../config/axios";

export function getBuyOrders() {
  return Axios.get(`/buy-orders`);
}

export function saveBuyOrder(payload) {
  return Axios.post(`/buy-orders`, payload);
}

export function updateBuyOrder(id, payload) {
  return Axios.patch(`/buy-orders/${id}`, payload);
}

export function deleteBuyOrder(id) {
  return Axios.delete(`/buy-orders/${id}`);
}

export function getDataPackageType() {
  return Axios.get(`/package-types/`);
}
