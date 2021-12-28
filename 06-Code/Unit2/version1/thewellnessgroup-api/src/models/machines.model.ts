import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Machines extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  gym: string;

  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  serialNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  mark: string;

  @property({
    type: 'string',
    required: true,
  })
  zone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Machines>) {
    super(data);
  }
}

export interface MachinesRelations {
  // describe navigational properties here
}

export type MachinesWithRelations = Machines & MachinesRelations;
