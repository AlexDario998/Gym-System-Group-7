import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestTiDevices extends Entity {
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
  idTIDevice: string;

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
  description: string;

  @property({
    type: 'boolean',
    required: true,
  })
  confirmation: boolean;

  constructor(data?: Partial<RepairRequestTiDevices>) {
    super(data);
  }
}

export interface RepairRequestTiDevicesRelations {
  // describe navigational properties here
}

export type RepairRequestTiDevicesWithRelations = RepairRequestTiDevices & RepairRequestTiDevicesRelations;
