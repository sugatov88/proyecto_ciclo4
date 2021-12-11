import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {NuevoUsuario, NuevoUsuarioRelations} from '../models';

export class NuevoUsuarioRepository extends DefaultCrudRepository<
  NuevoUsuario,
  typeof NuevoUsuario.prototype.id,
  NuevoUsuarioRelations
> {
  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource,
  ) {
    super(NuevoUsuario, dataSource);
  }
}
