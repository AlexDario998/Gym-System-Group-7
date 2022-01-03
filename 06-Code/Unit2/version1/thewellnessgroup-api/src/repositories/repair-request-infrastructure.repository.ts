import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {RepairRequestInfrastructure, RepairRequestInfrastructureRelations} from '../models';

export class RepairRequestInfrastructureRepository extends DefaultCrudRepository<
  RepairRequestInfrastructure,
  typeof RepairRequestInfrastructure.prototype.id,
  RepairRequestInfrastructureRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(RepairRequestInfrastructure, dataSource);
  }
}
