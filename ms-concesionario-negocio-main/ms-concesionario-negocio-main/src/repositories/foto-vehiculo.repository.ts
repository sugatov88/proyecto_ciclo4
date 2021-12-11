import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {FotoVehiculo, FotoVehiculoRelations} from '../models';

export class FotoVehiculoRepository extends DefaultCrudRepository<
  FotoVehiculo,
  typeof FotoVehiculo.prototype.id,
  FotoVehiculoRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(FotoVehiculo, dataSource);
  }
}
