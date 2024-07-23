// import { axios } from '@/utils/axios'
// import type { LoginData, LoginRes } from '@/types/user'

// interface UserHiResponse {
//   message: string
//   react?: string
//   vue?: string
// }

// export async function userHi(): Promise<UserHiResponse> {
//   return axios.get('/user/hi')
// }

// export async function userLoginApi(obj: LoginData): Promise<LoginRes> {
//   return axios.post('/user/login', obj)
// }

import {axios} from '@/utils/axios'
import type { LoginData, LoginRes } from '@/types/user'

interface UserHiResponse {
  message:string
  react?:string
  vue?:string
}
export async function userHi():Promise<UserHiResponse>{
  return axios.get('/user/hi')
}



export async function userLoginApi(obj: LoginData): Promise<LoginRes> {
  return axios.post('/user/login', obj)
}