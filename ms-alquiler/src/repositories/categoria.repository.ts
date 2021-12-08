import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Categoria, CategoriaRelations, Vehiculo, CategoriVehiculo} from '../models';
import {CategoriVehiculoRepository} from './categori-vehiculo.repository';
import {VehiculoRepository} from './vehiculo.repository';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {

  public readonly vehiculos: HasManyThroughRepositoryFactory<Vehiculo, typeof Vehiculo.prototype.id,
          CategoriVehiculo,
          typeof Categoria.prototype.id
        >;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('CategoriVehiculoRepository') protected categoriVehiculoRepositoryGetter: Getter<CategoriVehiculoRepository>, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(Categoria, dataSource);
    this.vehiculos = this.createHasManyThroughRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter, categoriVehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
