import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Fotos, FotosRelations} from '../models';

export class FotosRepository extends DefaultCrudRepository<
  Fotos,
  typeof Fotos.prototype.id,
  FotosRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(Fotos, dataSource);
  }
}
