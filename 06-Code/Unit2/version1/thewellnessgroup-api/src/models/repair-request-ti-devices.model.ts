import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestTiDevices extends Entity {
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
  idTIDevice: number;

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


  constructor(data?: Partial<RepairRequestTiDevices>) {
    super(data);
  }
}

export interface RepairRequestTiDevicesRelations {
  // describe navigational properties here
}

export type RepairRequestTiDevicesWithRelations = RepairRequestTiDevices & RepairRequestTiDevicesRelations;
