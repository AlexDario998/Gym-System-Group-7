import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {RepairRequestGymMachines, RepairRequestGymMachinesRelations} from '../models';

export class RepairRequestGymMachinesRepository extends DefaultCrudRepository<
  RepairRequestGymMachines,
  typeof RepairRequestGymMachines.prototype.id,
  RepairRequestGymMachinesRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(RepairRequestGymMachines, dataSource);
  }
}
