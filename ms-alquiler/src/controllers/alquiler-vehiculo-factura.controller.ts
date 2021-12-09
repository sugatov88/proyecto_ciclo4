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
  AlquilerVehiculo,
  Factura,
} from '../models';
import {AlquilerVehiculoRepository} from '../repositories';

export class AlquilerVehiculoFacturaController {
  constructor(
    @repository(AlquilerVehiculoRepository) protected alquilerVehiculoRepository: AlquilerVehiculoRepository,
  ) { }

  @get('/alquiler-vehiculos/{id}/factura', {
    responses: {
      '200': {
        description: 'AlquilerVehiculo has one Factura',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Factura),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Factura>,
  ): Promise<Factura> {
    return this.alquilerVehiculoRepository.factura(id).get(filter);
  }

  @post('/alquiler-vehiculos/{id}/factura', {
    responses: {
      '200': {
        description: 'AlquilerVehiculo model instance',
        content: {'application/json': {schema: getModelSchemaRef(Factura)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof AlquilerVehiculo.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Factura, {
            title: 'NewFacturaInAlquilerVehiculo',
            exclude: ['id'],
            optional: ['alquilerVehiculoId']
          }),
        },
      },
    }) factura: Omit<Factura, 'id'>,
  ): Promise<Factura> {
    return this.alquilerVehiculoRepository.factura(id).create(factura);
  }

  @patch('/alquiler-vehiculos/{id}/factura', {
    responses: {
      '200': {
        description: 'AlquilerVehiculo.Factura PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Factura, {partial: true}),
        },
      },
    })
    factura: Partial<Factura>,
    @param.query.object('where', getWhereSchemaFor(Factura)) where?: Where<Factura>,
  ): Promise<Count> {
    return this.alquilerVehiculoRepository.factura(id).patch(factura, where);
  }

  @del('/alquiler-vehiculos/{id}/factura', {
    responses: {
      '200': {
        description: 'AlquilerVehiculo.Factura DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Factura)) where?: Where<Factura>,
  ): Promise<Count> {
    return this.alquilerVehiculoRepository.factura(id).delete(where);
  }
}
