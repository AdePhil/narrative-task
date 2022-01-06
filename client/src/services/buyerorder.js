import axios from "axios";

export function getBuyerOrders() {
  return axios
    .get(`${process.env.VUE_APP_API_URL}/api/buyer-order/all`)
    .then((res) => res.data);
}

export function saveBuyerOrder(payload) {
  return axios.post(
    `${process.env.VUE_APP_API_URL}/api/buyer-order/create`,
    payload
  );
}

export function updateBuyerOrder(id, payload) {
  return axios.patch(
    `${process.env.VUE_APP_API_URL}/api/buyer-order/${id}`,
    payload
  );
}

export function deleteBuyerOrder(id) {
  return axios.delete(`${process.env.VUE_APP_API_URL}/api/buyer-order/${id}`);
}

export function getDataPackageType() {
  return axios
    .get(`${process.env.VUE_APP_API_URL}/api/data-package-type/all`)
    .then((res) => res.data);
}
