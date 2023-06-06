// import axios from "axios";

// const instance = axios.create({
//     baseURL: "http://localhost:5000",
// })

// export default instance;


import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5000",
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        // Add common headers to every request
        config.headers['content-type'] = 'application/json';
        config.headers.authorization = `Bearer ${localStorage.getItem('speedXpress-token')}`;
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
