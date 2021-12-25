import {ObjectType} from './ObjectType';

export interface ObjectTypeTemplate {
  name: string
  schema?: {
    [key: string]: ObjectType
  }
  options?: string[]
  example?: Object
}
