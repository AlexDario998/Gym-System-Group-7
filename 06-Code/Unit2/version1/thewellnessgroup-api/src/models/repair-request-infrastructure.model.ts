import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestInfrastructure extends Entity {
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
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<RepairRequestInfrastructure>) {
    super(data);
  }
}

export interface RepairRequestInfrastructureRelations {
  // describe navigational properties here
}

export type RepairRequestInfrastructureWithRelations = RepairRequestInfrastructure & RepairRequestInfrastructureRelations;
