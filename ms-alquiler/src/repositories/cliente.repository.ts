import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Cliente, ClienteRelations, AlquilerVehiculo} from '../models';
import {AlquilerVehiculoRepository} from './alquiler-vehiculo.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly alquilerVehiculos: HasManyRepositoryFactory<AlquilerVehiculo, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('AlquilerVehiculoRepository') protected alquilerVehiculoRepositoryGetter: Getter<AlquilerVehiculoRepository>,
  ) {
    super(Cliente, dataSource);
    this.alquilerVehiculos = this.createHasManyRepositoryFactoryFor('alquilerVehiculos', alquilerVehiculoRepositoryGetter,);
    this.registerInclusionResolver('alquilerVehiculos', this.alquilerVehiculos.inclusionResolver);
  }
}
