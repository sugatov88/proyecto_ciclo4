import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Vehiculo,
  Categoria,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoCategoriaController {
  constructor(
    @repository(VehiculoRepository)
    public vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/categoria', {
    responses: {
      '200': {
        description: 'Categoria belonging to Vehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Categoria)},
          },
        },
      },
    },
  })
  async getCategoria(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
  ): Promise<Categoria> {
    return this.vehiculoRepository.categoria(id);
  }
}
