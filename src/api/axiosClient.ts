import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { userInfo } from 'os';
import { toast } from 'react-toastify';

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {

    var userInfo = JSON.parse(localStorage.getItem('user_info') + '')
    // var token = ''
    // if (userInfo) {
    //   token = userInfo.access_token
    // }
    var token = userInfo ? userInfo.access_token : ''
    // Do something before request is sent
    if (!config.url?.includes('/login')) {
      config.headers.Authorization = `Bearer ${token}` //'Bearer '+ token
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    console.log(error.response)
    switch (error.response.status) {
      case 400:
        // code block
        toast.error(error.response.data.message)
        break;
      case 401:
        // code block
        window.location.href = '/login'
        break;
      default:
      // code block
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);

export default axiosClient;
