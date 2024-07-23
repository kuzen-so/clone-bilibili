import Axios from 'axios'
import type { InternalAxiosRequestConfig } from 'axios'
import { message } from 'ant-design-vue';

export const axios = Axios.create({
  baseURL: '/api',
})

axios.interceptors.request.use((config:InternalAxiosRequestConfig) => {
  // 所有请求发出前，都可以在这里统一处理
  config.headers.apiKey = import.meta.env.VITE_API_KEY
  // @todo 
  // 用户登录信息 ，本地存储的获取
  return config
})



axios.interceptors.response.use((response) => {
  // 返回数据
  const {data} = response
  if(data.code===0){
    return data.data
  }else{
    // 不同的code 有不同的含义
    message.warning(data.message);
    // -1统一的报错

    // -666就是登录状态过期
    return Promise.reject(data)
  }
})