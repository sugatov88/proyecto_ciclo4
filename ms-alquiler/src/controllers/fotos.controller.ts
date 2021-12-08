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
import {Fotos} from '../models';
import {FotosRepository} from '../repositories';

export class FotosController {
  constructor(
    @repository(FotosRepository)
    public fotosRepository : FotosRepository,
  ) {}

  @post('/fotos')
  @response(200, {
    description: 'Fotos model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fotos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {
            title: 'NewFotos',
            exclude: ['id'],
          }),
        },
      },
    })
    fotos: Omit<Fotos, 'id'>,
  ): Promise<Fotos> {
    return this.fotosRepository.create(fotos);
  }

  @get('/fotos/count')
  @response(200, {
    description: 'Fotos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fotos) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.fotosRepository.count(where);
  }

  @get('/fotos')
  @response(200, {
    description: 'Array of Fotos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fotos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fotos) filter?: Filter<Fotos>,
  ): Promise<Fotos[]> {
    return this.fotosRepository.find(filter);
  }

  @patch('/fotos')
  @response(200, {
    description: 'Fotos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {partial: true}),
        },
      },
    })
    fotos: Fotos,
    @param.where(Fotos) where?: Where<Fotos>,
  ): Promise<Count> {
    return this.fotosRepository.updateAll(fotos, where);
  }

  @get('/fotos/{id}')
  @response(200, {
    description: 'Fotos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fotos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Fotos, {exclude: 'where'}) filter?: FilterExcludingWhere<Fotos>
  ): Promise<Fotos> {
    return this.fotosRepository.findById(id, filter);
  }

  @patch('/fotos/{id}')
  @response(204, {
    description: 'Fotos PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fotos, {partial: true}),
        },
      },
    })
    fotos: Fotos,
  ): Promise<void> {
    await this.fotosRepository.updateById(id, fotos);
  }

  @put('/fotos/{id}')
  @response(204, {
    description: 'Fotos PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fotos: Fotos,
  ): Promise<void> {
    await this.fotosRepository.replaceById(id, fotos);
  }

  @del('/fotos/{id}')
  @response(204, {
    description: 'Fotos DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fotosRepository.deleteById(id);
  }
}
