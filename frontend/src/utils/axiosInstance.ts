import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error(
        `API Error: ${error.response.data.detail || error.message}`
      );
    } else if (error.request) {
      console.error("No response from the server");
    } else {
      console.error(`Unexpected error: ${error.message}`);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
