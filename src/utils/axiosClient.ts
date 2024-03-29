import axios from 'axios'

export const axiosClient = axios.create({
   baseURL: 'http://localhost:8800/api/',
   headers: {
      'Content-Type': 'application/json'
   }
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
   // Do something before request is sent
   return config;
}, function (error) {
   // Do something with request error
   return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
   // Any status code that lie within the range of 2xx cause this function to trigger
   // Do something with response data
   return {
      status: response.status,
      data: response.data
   }
      ;
}, function (error) {
   // Any status codes that falls outside the range of 2xx cause this function to trigger
   // Do something with response error
   return error.response.data;
});