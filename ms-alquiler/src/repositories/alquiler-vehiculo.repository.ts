import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {AlquilerVehiculo, AlquilerVehiculoRelations, Vehiculo, Factura} from '../models';
import {VehiculoRepository} from './vehiculo.repository';
import {FacturaRepository} from './factura.repository';

export class AlquilerVehiculoRepository extends DefaultCrudRepository<
  AlquilerVehiculo,
  typeof AlquilerVehiculo.prototype.id,
  AlquilerVehiculoRelations
> {

  public readonly vehiculo: BelongsToAccessor<Vehiculo, typeof AlquilerVehiculo.prototype.id>;

  public readonly factura: HasOneRepositoryFactory<Factura, typeof AlquilerVehiculo.prototype.id>;

  constructor(
    @inject('datasources.Mongodb') dataSource: MongodbDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>, @repository.getter('FacturaRepository') protected facturaRepositoryGetter: Getter<FacturaRepository>,
  ) {
    super(AlquilerVehiculo, dataSource);
    this.factura = this.createHasOneRepositoryFactoryFor('factura', facturaRepositoryGetter);
    this.registerInclusionResolver('factura', this.factura.inclusionResolver);
    this.vehiculo = this.createBelongsToAccessorFor('vehiculo', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculo', this.vehiculo.inclusionResolver);
  }
}
