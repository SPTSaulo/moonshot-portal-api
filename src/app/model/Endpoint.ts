export interface Endpoint {
  name: string
  method: Method
}

export enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete'
}
