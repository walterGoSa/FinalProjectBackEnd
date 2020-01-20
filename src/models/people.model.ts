import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';

@model()
export class People extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  lastname: string;

  @property({
    type: 'string',
  })
  secondlastname?: string;

  @property({
    type: 'string',
  })
  cellphone?: string;

  @property({
    type: 'date',
  })
  birthdate?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: Date;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updateAt?: Date;

  @belongsTo(() => User)
  userId: number;

  constructor(data?: Partial<People>) {
    super(data);
  }
}

export interface PeopleRelations {
  // describe navigational properties here
}

export type PeopleWithRelations = People & PeopleRelations;
