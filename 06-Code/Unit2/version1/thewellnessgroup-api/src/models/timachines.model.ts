import {Entity, model, property} from '@loopback/repository';

@model()
export class Timachines extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  serialNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  local: string;

  @property({
    type: 'string',
    required: true,
  })
  owner: string;


  constructor(data?: Partial<Timachines>) {
    super(data);
  }
}

export interface TimachinesRelations {
  // describe navigational properties here
}

export type TimachinesWithRelations = Timachines & TimachinesRelations;
