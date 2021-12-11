import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Asesor, AsesorRelations, Cliente, AlquilerVehiculo} from '../models';
import {ClienteRepository} from './cliente.repository';
import {AlquilerVehiculoRepository} from './alquiler-vehiculo.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype.id,
  AsesorRelations
> {

  public readonly clientes: HasManyRepositoryFactory<Cliente, typeof Asesor.prototype.id>;

  public readonly alquilerVehiculos: HasManyRepositoryFactory<AlquilerVehiculo, typeof Asesor.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('ClienteRepository') protected clienteRepositoryGetter: Getter<ClienteRepository>, @repository.getter('AlquilerVehiculoRepository') protected alquilerVehiculoRepositoryGetter: Getter<AlquilerVehiculoRepository>,
  ) {
    super(Asesor, dataSource);
    this.alquilerVehiculos = this.createHasManyRepositoryFactoryFor('alquilerVehiculos', alquilerVehiculoRepositoryGetter,);
    this.registerInclusionResolver('alquilerVehiculos', this.alquilerVehiculos.inclusionResolver);
    this.clientes = this.createHasManyRepositoryFactoryFor('clientes', clienteRepositoryGetter,);
    this.registerInclusionResolver('clientes', this.clientes.inclusionResolver);
  }
}
