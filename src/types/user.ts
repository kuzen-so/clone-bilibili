// 类型系统首字母大写

export interface LoginData {
  email: string
  react?: string
  vue?: string
}


export interface LoginRes{
    token:string
    _id:string
    email:string
}