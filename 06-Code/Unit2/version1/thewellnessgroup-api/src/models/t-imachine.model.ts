import {Entity, model, property} from '@loopback/repository';

@model()
export class TImachine extends Entity {
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
  serialNumber: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

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


  constructor(data?: Partial<TImachine>) {
    super(data);
  }
}

export interface TImachineRelations {
  // describe navigational properties here
}

export type TImachineWithRelations = TImachine & TImachineRelations;
