import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.withCredentials = true

Vue.prototype.baseURL = 'http://localhost:8080/'
// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  // _.toast("错误的传参", 'fail');
  // Message.error('参数错误')
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(
  res => {
    // let result = res.data
    // if (result && res.data.code === 1) {
    return Promise.resolve(res.data)
    // }
  },
  error => {
    // const response = error.response
    // if (response && Object.prototype.toString.call(response.data) === '[object Object]') {
    //   Message.error(error.response.data.message)
    //   if (error.response.data.code === 20008) {
    //     removeStorage('username')
    //     router.push({ name: 'login' })
    //   }
    // } else {
    //   Message.error(`${error.message}`)
    // }
    return Promise.reject(error)
  }
)

export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  // 搜索
  search (params) {
    return axios.get(`/accounts/${params}`)
  },
  search2 (params) {
    return axios.get(`/accounts/${params}/code`)
  }
}
