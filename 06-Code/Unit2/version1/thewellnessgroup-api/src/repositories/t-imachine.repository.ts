import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TheWellnessGroupDataSource} from '../datasources';
import {TImachine, TImachineRelations} from '../models';

export class TImachineRepository extends DefaultCrudRepository<
  TImachine,
  typeof TImachine.prototype.id,
  TImachineRelations
> {
  constructor(
    @inject('datasources.TheWellnessGroup') dataSource: TheWellnessGroupDataSource,
  ) {
    super(TImachine, dataSource);
  }
}
