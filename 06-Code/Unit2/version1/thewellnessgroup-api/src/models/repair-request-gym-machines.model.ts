import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestGymMachines extends Entity {
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
  idUser: string;

  @property({
    type: 'string',
    required: true,
  })
  idLocal: string;

  @property({
    type: 'string',
    required: true,
  })
  idGymMachine: string;

  @property({
    type: 'string',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  machineType: string;

  @property({
    type: 'string',
    required: true,
  })
  gymZone: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'boolean',
    required: true,
  })
  confirmation: boolean;

  constructor(data?: Partial<RepairRequestGymMachines>) {
    super(data);
  }
}

export interface RepairRequestGymMachinesRelations {
  // describe navigational properties here
}

export type RepairRequestGymMachinesWithRelations = RepairRequestGymMachines & RepairRequestGymMachinesRelations;
