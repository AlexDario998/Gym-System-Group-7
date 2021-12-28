import {Entity, model, property} from '@loopback/repository';

@model()
export class Gyms extends Entity {
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
  namegym: string;

  @property({
    type: 'string',
    required: true,
  })
  city: string;


  constructor(data?: Partial<Gyms>) {
    super(data);
  }
}

export interface GymsRelations {
  // describe navigational properties here
}

export type GymsWithRelations = Gyms & GymsRelations;
