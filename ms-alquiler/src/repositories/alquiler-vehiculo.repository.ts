import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {AlquilerVehiculo, AlquilerVehiculoRelations} from '../models';

export class AlquilerVehiculoRepository extends DefaultCrudRepository<
  AlquilerVehiculo,
  typeof AlquilerVehiculo.prototype.id,
  AlquilerVehiculoRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(AlquilerVehiculo, dataSource);
  }
}
