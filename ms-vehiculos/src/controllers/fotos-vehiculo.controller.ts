import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Fotos,
  Vehiculo,
} from '../models';
import {FotosRepository} from '../repositories';

export class FotosVehiculoController {
  constructor(
    @repository(FotosRepository)
    public fotosRepository: FotosRepository,
  ) { }

  @get('/fotos/{id}/vehiculo', {
    responses: {
      '200': {
        description: 'Vehiculo belonging to Fotos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Vehiculo)},
          },
        },
      },
    },
  })
  async getVehiculo(
    @param.path.number('id') id: typeof Fotos.prototype.id,
  ): Promise<Vehiculo> {
    return this.fotosRepository.vehiculo(id);
  }
}
