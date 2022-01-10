import axios from "axios";

const Axios = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`,
  headers: {},
});

const responseHandler = (response) => {
  return response.data;
};

const errorHandler = (error) => {
  const customError = error.response?.data || { message: "Network Error" };
  return Promise.reject(customError);
};

Axios.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default Axios;
