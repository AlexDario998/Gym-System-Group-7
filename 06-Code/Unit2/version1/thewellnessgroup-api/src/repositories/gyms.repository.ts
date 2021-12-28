import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {Gyms, GymsRelations} from '../models';

export class GymsRepository extends DefaultCrudRepository<
  Gyms,
  typeof Gyms.prototype.id,
  GymsRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(Gyms, dataSource);
  }
}
