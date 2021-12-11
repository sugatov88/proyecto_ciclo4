import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Marca, Categoria, AlquilerVehiculo} from '../models';
import {MarcaRepository} from './marca.repository';
import {CategoriaRepository} from './categoria.repository';
import {AlquilerVehiculoRepository} from './alquiler-vehiculo.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly marca: BelongsToAccessor<Marca, typeof Vehiculo.prototype.id>;

  public readonly categoria: BelongsToAccessor<Categoria, typeof Vehiculo.prototype.id>;

  public readonly alquilerVehiculos: HasManyRepositoryFactory<AlquilerVehiculo, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('AlquilerVehiculoRepository') protected alquilerVehiculoRepositoryGetter: Getter<AlquilerVehiculoRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.alquilerVehiculos = this.createHasManyRepositoryFactoryFor('alquilerVehiculos', alquilerVehiculoRepositoryGetter,);
    this.registerInclusionResolver('alquilerVehiculos', this.alquilerVehiculos.inclusionResolver);
    this.categoria = this.createBelongsToAccessorFor('categoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('categoria', this.categoria.inclusionResolver);
    this.marca = this.createBelongsToAccessorFor('marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('marca', this.marca.inclusionResolver);
  }
}
