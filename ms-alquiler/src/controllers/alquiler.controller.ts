import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {AlquilerVehiculo} from '../models';
import {AlquilerVehiculoRepository} from '../repositories';

export class AlquilerController {
  constructor(
    @repository(AlquilerVehiculoRepository)
    public alquilerVehiculoRepository : AlquilerVehiculoRepository,
  ) {}

  @post('/alquiler-vehiculos')
  @response(200, {
    description: 'AlquilerVehiculo model instance',
    content: {'application/json': {schema: getModelSchemaRef(AlquilerVehiculo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {
            title: 'NewAlquilerVehiculo',
            exclude: ['id'],
          }),
        },
      },
    })
    alquilerVehiculo: Omit<AlquilerVehiculo, 'id'>,
  ): Promise<AlquilerVehiculo> {
    return this.alquilerVehiculoRepository.create(alquilerVehiculo);
  }

  @get('/alquiler-vehiculos/count')
  @response(200, {
    description: 'AlquilerVehiculo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(AlquilerVehiculo) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.alquilerVehiculoRepository.count(where);
  }

  @get('/alquiler-vehiculos')
  @response(200, {
    description: 'Array of AlquilerVehiculo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(AlquilerVehiculo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(AlquilerVehiculo) filter?: Filter<AlquilerVehiculo>,
  ): Promise<AlquilerVehiculo[]> {
    return this.alquilerVehiculoRepository.find(filter);
  }

  @patch('/alquiler-vehiculos')
  @response(200, {
    description: 'AlquilerVehiculo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {partial: true}),
        },
      },
    })
    alquilerVehiculo: AlquilerVehiculo,
    @param.where(AlquilerVehiculo) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.alquilerVehiculoRepository.updateAll(alquilerVehiculo, where);
  }

  @get('/alquiler-vehiculos/{id}')
  @response(200, {
    description: 'AlquilerVehiculo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(AlquilerVehiculo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(AlquilerVehiculo, {exclude: 'where'}) filter?: FilterExcludingWhere<AlquilerVehiculo>
  ): Promise<AlquilerVehiculo> {
    return this.alquilerVehiculoRepository.findById(id, filter);
  }

  @patch('/alquiler-vehiculos/{id}')
  @response(204, {
    description: 'AlquilerVehiculo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {partial: true}),
        },
      },
    })
    alquilerVehiculo: AlquilerVehiculo,
  ): Promise<void> {
    await this.alquilerVehiculoRepository.updateById(id, alquilerVehiculo);
  }

  @put('/alquiler-vehiculos/{id}')
  @response(204, {
    description: 'AlquilerVehiculo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() alquilerVehiculo: AlquilerVehiculo,
  ): Promise<void> {
    await this.alquilerVehiculoRepository.replaceById(id, alquilerVehiculo);
  }

  @del('/alquiler-vehiculos/{id}')
  @response(204, {
    description: 'AlquilerVehiculo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.alquilerVehiculoRepository.deleteById(id);
  }
}
