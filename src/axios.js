import axios from "axios";

/*

This is a global instance of axios by using this we don't need to write http://localhost:5000 again and again.
also by default headers and bearer token will be given by default froom this instance code.
so use it..............

Ref video: https://www.youtube.com/watch?v=q-wZRtmnpws&ab_channel=CodeBlessYou
*/

const instance = axios.create({
  // this will work as default "/" to every api url
  baseURL: "https://speed-xpress.vercel.app/",
});

// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    // Add common headers to every request
    config.headers["content-type"] = "application/json";
    config.headers.authorization = `Bearer ${localStorage.getItem(
      "speedXpress-token"
    )}`;
    return config;
  },
  (error) => {
    // Handle request errors
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // Transform response data if needed
    return response.data;
  },
  (error) => {
    // Handle response errors
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
