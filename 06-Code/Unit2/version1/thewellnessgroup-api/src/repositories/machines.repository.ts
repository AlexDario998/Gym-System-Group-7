import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {Machines, MachinesRelations} from '../models';

export class MachinesRepository extends DefaultCrudRepository<
  Machines,
  typeof Machines.prototype.serialNumber,
  MachinesRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(Machines, dataSource);
  }
}
