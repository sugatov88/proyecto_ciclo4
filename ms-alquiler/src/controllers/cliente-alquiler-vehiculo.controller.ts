import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cliente,
  AlquilerVehiculo,
} from '../models';
import {ClienteRepository} from '../repositories';

export class ClienteAlquilerVehiculoController {
  constructor(
    @repository(ClienteRepository) protected clienteRepository: ClienteRepository,
  ) { }

  @get('/clientes/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Array of Cliente has many AlquilerVehiculo',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(AlquilerVehiculo)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<AlquilerVehiculo>,
  ): Promise<AlquilerVehiculo[]> {
    return this.clienteRepository.alquilerVehiculos(id).find(filter);
  }

  @post('/clientes/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Cliente model instance',
        content: {'application/json': {schema: getModelSchemaRef(AlquilerVehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cliente.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {
            title: 'NewAlquilerVehiculoInCliente',
            exclude: ['id'],
            optional: ['clienteId']
          }),
        },
      },
    }) alquilerVehiculo: Omit<AlquilerVehiculo, 'id'>,
  ): Promise<AlquilerVehiculo> {
    return this.clienteRepository.alquilerVehiculos(id).create(alquilerVehiculo);
  }

  @patch('/clientes/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Cliente.AlquilerVehiculo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {partial: true}),
        },
      },
    })
    alquilerVehiculo: Partial<AlquilerVehiculo>,
    @param.query.object('where', getWhereSchemaFor(AlquilerVehiculo)) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.clienteRepository.alquilerVehiculos(id).patch(alquilerVehiculo, where);
  }

  @del('/clientes/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Cliente.AlquilerVehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(AlquilerVehiculo)) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.clienteRepository.alquilerVehiculos(id).delete(where);
  }
}
