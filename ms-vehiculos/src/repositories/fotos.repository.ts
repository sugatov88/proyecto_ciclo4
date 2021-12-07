import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Fotos, FotosRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class FotosRepository extends DefaultCrudRepository<
  Fotos,
  typeof Fotos.prototype.id,
  FotosRelations
> {

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof Fotos.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Fotos, dataSource);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
  }
}
