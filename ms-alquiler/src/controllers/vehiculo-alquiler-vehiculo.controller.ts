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
  Vehiculo,
  AlquilerVehiculo,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoAlquilerVehiculoController {
  constructor(
    @repository(VehiculoRepository) protected vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Array of Vehiculo has many AlquilerVehiculo',
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
    return this.vehiculoRepository.alquilerVehiculos(id).find(filter);
  }

  @post('/vehiculos/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Vehiculo model instance',
        content: {'application/json': {schema: getModelSchemaRef(AlquilerVehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Vehiculo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {
            title: 'NewAlquilerVehiculoInVehiculo',
            exclude: ['id'],
            optional: ['vehiculoId']
          }),
        },
      },
    }) alquilerVehiculo: Omit<AlquilerVehiculo, 'id'>,
  ): Promise<AlquilerVehiculo> {
    return this.vehiculoRepository.alquilerVehiculos(id).create(alquilerVehiculo);
  }

  @patch('/vehiculos/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Vehiculo.AlquilerVehiculo PATCH success count',
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
    return this.vehiculoRepository.alquilerVehiculos(id).patch(alquilerVehiculo, where);
  }

  @del('/vehiculos/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Vehiculo.AlquilerVehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(AlquilerVehiculo)) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.vehiculoRepository.alquilerVehiculos(id).delete(where);
  }
}
