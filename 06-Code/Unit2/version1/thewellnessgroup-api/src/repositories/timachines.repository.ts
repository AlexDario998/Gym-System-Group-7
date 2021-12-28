import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {Timachines, TimachinesRelations} from '../models';

export class TimachinesRepository extends DefaultCrudRepository<
  Timachines,
  typeof Timachines.prototype.id,
  TimachinesRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(Timachines, dataSource);
  }
}
