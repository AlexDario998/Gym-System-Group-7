import {Entity, model, property} from '@loopback/repository';

@model()
export class RepairRequestInfrastructure extends Entity {
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
