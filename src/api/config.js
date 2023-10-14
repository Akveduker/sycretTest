import axios from "axios";
const apiInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
apiInstance.interceptors.request.use((config) => {
  config.params = {
    apiKey: process.env.REACT_APP_API_KEY,
    ...config.params,
  };
  return config;
});

export default apiInstance;
