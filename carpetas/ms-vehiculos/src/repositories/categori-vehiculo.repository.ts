import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {CategoriVehiculo, CategoriVehiculoRelations} from '../models';

export class CategoriVehiculoRepository extends DefaultCrudRepository<
  CategoriVehiculo,
  typeof CategoriVehiculo.prototype.id,
  CategoriVehiculoRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(CategoriVehiculo, dataSource);
  }
}
