import { Entity } from './Entity';
import { ObjectType } from './ObjectType';

export interface EventTemplate {
  name: string
  schema: {
    [key: string]: ObjectType
  }
  example: Object
  entity: Entity
}
