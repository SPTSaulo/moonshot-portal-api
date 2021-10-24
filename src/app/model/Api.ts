import { Endpoint } from './Endpoint';

export interface Api {
  name: string,
  endpoints: Endpoint[]
  description: string
  swagger: Object
}
