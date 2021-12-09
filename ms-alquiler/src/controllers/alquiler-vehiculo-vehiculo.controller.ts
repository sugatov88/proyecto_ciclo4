import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  AlquilerVehiculo,
  Vehiculo,
} from '../models';
import {AlquilerVehiculoRepository} from '../repositories';

export class AlquilerVehiculoVehiculoController {
  constructor(
    @repository(AlquilerVehiculoRepository)
    public alquilerVehiculoRepository: AlquilerVehiculoRepository,
  ) { }

  @get('/alquiler-vehiculos/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'Vehiculo belonging to AlquilerVehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async getVehiculo(
    @param.path.string('id') id: typeof AlquilerVehiculo.prototype.id,
  ): Promise<Vehiculo> {
    return this.alquilerVehiculoRepository.vehiculo(id);
  }
}
