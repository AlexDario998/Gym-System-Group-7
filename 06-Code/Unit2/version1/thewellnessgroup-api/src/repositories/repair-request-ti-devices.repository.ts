import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {RepairRequestTiDevices, RepairRequestTiDevicesRelations} from '../models';

export class RepairRequestTiDevicesRepository extends DefaultCrudRepository<
  RepairRequestTiDevices,
  typeof RepairRequestTiDevices.prototype.id,
  RepairRequestTiDevicesRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(RepairRequestTiDevices, dataSource);
  }
}
