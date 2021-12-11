import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Proveedor, ProveedorRelations} from '../models';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
