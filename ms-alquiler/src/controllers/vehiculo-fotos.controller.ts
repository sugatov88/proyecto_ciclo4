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
  Fotos,
} from '../models';
import {VehiculoRepository} from '../repositories';

export class VehiculoFotosController {
  constructor(
    @repository(VehiculoRepository) protected vehiculoRepository: VehiculoRepository,
  ) { }

  @get('/vehiculos/{id}/fotos', {
    responses: {
      '200': {
        description: 'Array of Vehiculo has many Fotos',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fotos)},
          },
        },
      },
    },
  })
  async find(
    @param.path.String('id') id: String,
    @param.query.object('filter') filter?: Filter<Fotos>,
  ): Promise<Fotos[]> {
    return this.vehiculoRepository.fotos(id).find(filter);
  }

  @post('/vehiculos/{id}/fotos', {
    responses: {
      '200': {
        description: 'Vehiculo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fotos)}},
      },
    },
  })
  async create(
    @param.path.String('id') id: typeof Vehiculo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {
            title: 'NewFotosInVehiculo',
            exclude: ['id'],
            optional: ['vehiculoId']
          }),
        },
      },
    }) fotos: Omit<Fotos, 'id'>,
  ): Promise<Fotos> {
    return this.vehiculoRepository.fotos(id).create(fotos);
  }

  @patch('/vehiculos/{id}/fotos', {
    responses: {
      '200': {
        description: 'Vehiculo.Fotos PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.String('id') id: String,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {partial: true}),
        },
      },
    })
    fotos: Partial<Fotos>,
    @param.query.object('where', getWhereSchemaFor(Fotos)) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.vehiculoRepository.fotos(id).patch(fotos, where);
  }

  @del('/vehiculos/{id}/fotos', {
    responses: {
      '200': {
        description: 'Vehiculo.Fotos DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.String('id') id: String,
    @param.query.object('where', getWhereSchemaFor(Fotos)) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.vehiculoRepository.fotos(id).delete(where);
  }
}
