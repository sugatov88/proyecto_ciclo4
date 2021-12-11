import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {CategoriaVehiculo, CategoriaVehiculoRelations} from '../models';

export class CategoriaVehiculoRepository extends DefaultCrudRepository<
  CategoriaVehiculo,
  typeof CategoriaVehiculo.prototype.id,
  CategoriaVehiculoRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(CategoriaVehiculo, dataSource);
  }
}
