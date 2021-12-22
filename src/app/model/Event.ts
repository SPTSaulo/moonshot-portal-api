import { Entity } from './Entity';
import {ObjectType} from './ObjectType';

export interface Event {
  name: string
  schema: {
    [key: string]: ObjectType
  }
  example: Object
  entity: Entity
}
