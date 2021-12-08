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
import {CategoriVehiculo} from '../models';
import {CategoriVehiculoRepository} from '../repositories';

export class CategoriaVehiculoController {
  constructor(
    @repository(CategoriVehiculoRepository)
    public categoriVehiculoRepository : CategoriVehiculoRepository,
  ) {}

  @post('/categori-vehiculos')
  @response(200, {
    description: 'CategoriVehiculo model instance',
    content: {'application/json': {schema: getModelSchemaRef(CategoriVehiculo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriVehiculo, {
            title: 'NewCategoriVehiculo',
            exclude: ['id'],
          }),
        },
      },
    })
    categoriVehiculo: Omit<CategoriVehiculo, 'id'>,
  ): Promise<CategoriVehiculo> {
    return this.categoriVehiculoRepository.create(categoriVehiculo);
  }

  @get('/categori-vehiculos/count')
  @response(200, {
    description: 'CategoriVehiculo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CategoriVehiculo) where?: Where<CategoriVehiculo>,
  ): Promise<Count> {
    return this.categoriVehiculoRepository.count(where);
  }

  @get('/categori-vehiculos')
  @response(200, {
    description: 'Array of CategoriVehiculo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CategoriVehiculo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CategoriVehiculo) filter?: Filter<CategoriVehiculo>,
  ): Promise<CategoriVehiculo[]> {
    return this.categoriVehiculoRepository.find(filter);
  }

  @patch('/categori-vehiculos')
  @response(200, {
    description: 'CategoriVehiculo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriVehiculo, {partial: true}),
        },
      },
    })
    categoriVehiculo: CategoriVehiculo,
    @param.where(CategoriVehiculo) where?: Where<CategoriVehiculo>,
  ): Promise<Count> {
    return this.categoriVehiculoRepository.updateAll(categoriVehiculo, where);
  }

  @get('/categori-vehiculos/{id}')
  @response(200, {
    description: 'CategoriVehiculo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CategoriVehiculo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(CategoriVehiculo, {exclude: 'where'}) filter?: FilterExcludingWhere<CategoriVehiculo>
  ): Promise<CategoriVehiculo> {
    return this.categoriVehiculoRepository.findById(id, filter);
  }

  @patch('/categori-vehiculos/{id}')
  @response(204, {
    description: 'CategoriVehiculo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CategoriVehiculo, {partial: true}),
        },
      },
    })
    categoriVehiculo: CategoriVehiculo,
  ): Promise<void> {
    await this.categoriVehiculoRepository.updateById(id, categoriVehiculo);
  }

  @put('/categori-vehiculos/{id}')
  @response(204, {
    description: 'CategoriVehiculo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() categoriVehiculo: CategoriVehiculo,
  ): Promise<void> {
    await this.categoriVehiculoRepository.replaceById(id, categoriVehiculo);
  }

  @del('/categori-vehiculos/{id}')
  @response(204, {
    description: 'CategoriVehiculo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.categoriVehiculoRepository.deleteById(id);
  }
}
