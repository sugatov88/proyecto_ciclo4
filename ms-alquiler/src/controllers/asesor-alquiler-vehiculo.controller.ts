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
  Asesor,
  AlquilerVehiculo,
} from '../models';
import {AsesorRepository} from '../repositories';

export class AsesorAlquilerVehiculoController {
  constructor(
    @repository(AsesorRepository) protected asesorRepository: AsesorRepository,
  ) { }

  @get('/asesors/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Array of Asesor has many AlquilerVehiculo',
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
    return this.asesorRepository.alquilerVehiculos(id).find(filter);
  }

  @post('/asesors/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Asesor model instance',
        content: {'application/json': {schema: getModelSchemaRef(AlquilerVehiculo)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Asesor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(AlquilerVehiculo, {
            title: 'NewAlquilerVehiculoInAsesor',
            exclude: ['id'],
            optional: ['asesorId']
          }),
        },
      },
    }) alquilerVehiculo: Omit<AlquilerVehiculo, 'id'>,
  ): Promise<AlquilerVehiculo> {
    return this.asesorRepository.alquilerVehiculos(id).create(alquilerVehiculo);
  }

  @patch('/asesors/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Asesor.AlquilerVehiculo PATCH success count',
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
    return this.asesorRepository.alquilerVehiculos(id).patch(alquilerVehiculo, where);
  }

  @del('/asesors/{id}/alquiler-vehiculos', {
    responses: {
      '200': {
        description: 'Asesor.AlquilerVehiculo DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(AlquilerVehiculo)) where?: Where<AlquilerVehiculo>,
  ): Promise<Count> {
    return this.asesorRepository.alquilerVehiculos(id).delete(where);
  }
}
