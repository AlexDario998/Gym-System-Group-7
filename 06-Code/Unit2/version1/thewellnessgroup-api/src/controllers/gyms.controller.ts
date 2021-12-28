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
import {Gyms} from '../models';
import {GymsRepository} from '../repositories';

export class GymsController {
  constructor(
    @repository(GymsRepository)
    public gymsRepository : GymsRepository,
  ) {}

  @post('/gyms')
  @response(200, {
    description: 'Gyms model instance',
    content: {'application/json': {schema: getModelSchemaRef(Gyms)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gyms, {
            title: 'NewGyms',
            exclude: ['id'],
          }),
        },
      },
    })
    gyms: Omit<Gyms, 'id'>,
  ): Promise<Gyms> {
    return this.gymsRepository.create(gyms);
  }

  @get('/gyms/count')
  @response(200, {
    description: 'Gyms model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Gyms) where?: Where<Gyms>,
  ): Promise<Count> {
    return this.gymsRepository.count(where);
  }

  @get('/gyms')
  @response(200, {
    description: 'Array of Gyms model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Gyms, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Gyms) filter?: Filter<Gyms>,
  ): Promise<Gyms[]> {
    return this.gymsRepository.find(filter);
  }

  @patch('/gyms')
  @response(200, {
    description: 'Gyms PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gyms, {partial: true}),
        },
      },
    })
    gyms: Gyms,
    @param.where(Gyms) where?: Where<Gyms>,
  ): Promise<Count> {
    return this.gymsRepository.updateAll(gyms, where);
  }

  @get('/gyms/{id}')
  @response(200, {
    description: 'Gyms model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Gyms, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Gyms, {exclude: 'where'}) filter?: FilterExcludingWhere<Gyms>
  ): Promise<Gyms> {
    return this.gymsRepository.findById(id, filter);
  }

  @patch('/gyms/{id}')
  @response(204, {
    description: 'Gyms PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Gyms, {partial: true}),
        },
      },
    })
    gyms: Gyms,
  ): Promise<void> {
    await this.gymsRepository.updateById(id, gyms);
  }

  @put('/gyms/{id}')
  @response(204, {
    description: 'Gyms PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() gyms: Gyms,
  ): Promise<void> {
    await this.gymsRepository.replaceById(id, gyms);
  }

  @del('/gyms/{id}')
  @response(204, {
    description: 'Gyms DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.gymsRepository.deleteById(id);
  }
}
