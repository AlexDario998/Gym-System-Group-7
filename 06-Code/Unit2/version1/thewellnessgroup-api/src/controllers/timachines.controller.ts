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
import {Timachines} from '../models';
import {TimachinesRepository} from '../repositories';

export class TimachinesController {
  constructor(
    @repository(TimachinesRepository)
    public timachinesRepository : TimachinesRepository,
  ) {}

  @post('/timachines')
  @response(200, {
    description: 'Timachines model instance',
    content: {'application/json': {schema: getModelSchemaRef(Timachines)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Timachines, {
            title: 'NewTimachines',
            exclude: ['id'],
          }),
        },
      },
    })
    timachines: Omit<Timachines, 'id'>,
  ): Promise<Timachines> {
    return this.timachinesRepository.create(timachines);
  }

  @get('/timachines/count')
  @response(200, {
    description: 'Timachines model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Timachines) where?: Where<Timachines>,
  ): Promise<Count> {
    return this.timachinesRepository.count(where);
  }

  @get('/timachines')
  @response(200, {
    description: 'Array of Timachines model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Timachines, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Timachines) filter?: Filter<Timachines>,
  ): Promise<Timachines[]> {
    return this.timachinesRepository.find(filter);
  }

  @patch('/timachines')
  @response(200, {
    description: 'Timachines PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Timachines, {partial: true}),
        },
      },
    })
    timachines: Timachines,
    @param.where(Timachines) where?: Where<Timachines>,
  ): Promise<Count> {
    return this.timachinesRepository.updateAll(timachines, where);
  }

  @get('/timachines/{id}')
  @response(200, {
    description: 'Timachines model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Timachines, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Timachines, {exclude: 'where'}) filter?: FilterExcludingWhere<Timachines>
  ): Promise<Timachines> {
    return this.timachinesRepository.findById(id, filter);
  }

  @patch('/timachines/{id}')
  @response(204, {
    description: 'Timachines PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Timachines, {partial: true}),
        },
      },
    })
    timachines: Timachines,
  ): Promise<void> {
    await this.timachinesRepository.updateById(id, timachines);
  }

  @put('/timachines/{id}')
  @response(204, {
    description: 'Timachines PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() timachines: Timachines,
  ): Promise<void> {
    await this.timachinesRepository.replaceById(id, timachines);
  }

  @del('/timachines/{id}')
  @response(204, {
    description: 'Timachines DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.timachinesRepository.deleteById(id);
  }
}
