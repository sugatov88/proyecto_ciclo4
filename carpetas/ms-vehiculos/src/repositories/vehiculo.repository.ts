import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyThroughRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Marca, Categoria, CategoriVehiculo, Fotos} from '../models';
import {MarcaRepository} from './marca.repository';
import {CategoriVehiculoRepository} from './categori-vehiculo.repository';
import {CategoriaRepository} from './categoria.repository';
import {FotosRepository} from './fotos.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly marca: BelongsToAccessor<Marca, typeof Vehiculo.prototype.id>;

  public readonly categorias: HasManyThroughRepositoryFactory<Categoria, typeof Categoria.prototype.id,
          CategoriVehiculo,
          typeof Vehiculo.prototype.id
        >;

  public readonly fotos: HasManyRepositoryFactory<Fotos, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('CategoriVehiculoRepository') protected categoriVehiculoRepositoryGetter: Getter<CategoriVehiculoRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('FotosRepository') protected fotosRepositoryGetter: Getter<FotosRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.fotos = this.createHasManyRepositoryFactoryFor('fotos', fotosRepositoryGetter,);
    this.registerInclusionResolver('fotos', this.fotos.inclusionResolver);
    this.categorias = this.createHasManyThroughRepositoryFactoryFor('categorias', categoriaRepositoryGetter, categoriVehiculoRepositoryGetter,);
    this.registerInclusionResolver('categorias', this.categorias.inclusionResolver);
    this.marca = this.createBelongsToAccessorFor('marca', marcaRepositoryGetter,);
    this.registerInclusionResolver('marca', this.marca.inclusionResolver);
  }
}
