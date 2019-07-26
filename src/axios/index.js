import axios from "axios";

// 环境的切换
const devBaseUrl =
  "https://www.easy-mock.com/mock/5d3530b8700c9f6502215a6f/manager";
const prodBaseUrl = devBaseUrl;
if (process.env.NODE_ENV == "development") {
  axios.defaults.baseURL = devBaseUrl;
} else if (process.env.NODE_ENV == "production") {
  axios.defaults.baseURL = prodBaseUrl;
}

console.log(`baseURL ${process.env.NODE_ENV}, ${axios.defaults.baseURL}`);

axios.defaults.timeout = 30000; //响应时间
axios.defaults.headers.post["Content-Type"] = "application/json;charse=UTF-8"; //配置请求头

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    config.headers = {
      //"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      //"Content-Type":"application/json"
    };
    //const token = getCookie("session");
    // if (token) {
    //   config.params = { token: token };
    // }
    return config;
  },
  error => {
    console.log("axios.interceptors.request error ==>", error);

    return Promise.reject(error);
  }
);
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  response => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    // 否则的话抛出错误
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    console.log("axios.interceptors.response error ==>", error);

    message.error("网络错误");
    return Promise.reject(error.response);
  }
);

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  showLoading(options);
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then(
        response => {
          if (response.status == "200") {
            let res = response.data;
            if (res.code == "0") {
              resolve(res);
            } else {
              console.log(res.msg);
            }
          } else {
            reject(response.data);
          }
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
}
