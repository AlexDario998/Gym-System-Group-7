import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestGymMachines extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  idUser: number;

  @property({
    type: 'number',
    required: true,
  })
  idLocal: number;

  @property({
    type: 'number',
    required: true,
  })
  idGymMachine: number;

  @property({
    type: 'date',
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


  constructor(data?: Partial<RepairRequestGymMachines>) {
    super(data);
  }
}

export interface RepairRequestGymMachinesRelations {
  // describe navigational properties here
}

export type RepairRequestGymMachinesWithRelations = RepairRequestGymMachines & RepairRequestGymMachinesRelations;
