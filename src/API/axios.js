import axios from "axios";
const domain = 'http://127.0.0.1:8080/';

function getPath (url) {
  return domain + url
}

var Axios = axios.create();
// 请求拦截
Axios.interceptors.request.use(
  (config) => {
    // token认证写在这里
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);
// 响应拦截
Axios.interceptors.response.use(
  (config) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);
// get封装
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    Axios({
      url: getPath(url),
      params,
      method: "get",
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
// post封装
export function post (url, params = {}, data = {}) {
  console.log(getPath(url),params,data)
  return new Promise((resolve, reject) => {
    Axios({
      url: getPath(url),
      method: "post",
      params,
      data,
    })
      .then((res) => {
        console.log(res)
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
      url: getPath(url),
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
      url: getPath(url),
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