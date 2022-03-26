import axios from "axios";
import { GetLocalStorage } from 'utils/cache';
const domain = 'http://127.0.0.1:8080/';

var Axios = axios.create({
  baseURL: domain,
  timeout: 6000
});
// 请求拦截
Axios.interceptors.request.use(
  (config) => {

    const token = GetLocalStorage('token');
    if (token) {
      // token认证写在这里
      config.headers.token = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
Axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// get封装
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      params,
      method: "get",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  })
}
// post封装
export function post (url, params = {}, data = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "post",
      params,
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// delete封装
export function del (url, params = {}, data = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "delete",
      params,
      data,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
//   Blob封装,resopnseType:Blob一般是用于文件下载
export function getBlob (url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      url,
      method: "get",
      params,
      responseType: 'blob'
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}