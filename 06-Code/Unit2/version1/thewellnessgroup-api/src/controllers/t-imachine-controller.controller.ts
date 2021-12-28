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
import {TImachine} from '../models';
import {TImachineRepository} from '../repositories';

export class TImachineControllerController {
  constructor(
    @repository(TImachineRepository)
    public tImachineRepository : TImachineRepository,
  ) {}

  @post('/TImachines')
  @response(200, {
    description: 'TImachine model instance',
    content: {'application/json': {schema: getModelSchemaRef(TImachine)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TImachine, {
            title: 'NewTImachine',
            
          }),
        },
      },
    })
    tImachine: TImachine,
  ): Promise<TImachine> {
    return this.tImachineRepository.create(tImachine);
  }

  @get('/TImachines/count')
  @response(200, {
    description: 'TImachine model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TImachine) where?: Where<TImachine>,
  ): Promise<Count> {
    return this.tImachineRepository.count(where);
  }

  @get('/TImachines')
  @response(200, {
    description: 'Array of TImachine model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TImachine, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TImachine) filter?: Filter<TImachine>,
  ): Promise<TImachine[]> {
    return this.tImachineRepository.find(filter);
  }

  @patch('/TImachines')
  @response(200, {
    description: 'TImachine PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TImachine, {partial: true}),
        },
      },
    })
    tImachine: TImachine,
    @param.where(TImachine) where?: Where<TImachine>,
  ): Promise<Count> {
    return this.tImachineRepository.updateAll(tImachine, where);
  }

  @get('/TImachines/{id}')
  @response(200, {
    description: 'TImachine model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TImachine, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TImachine, {exclude: 'where'}) filter?: FilterExcludingWhere<TImachine>
  ): Promise<TImachine> {
    return this.tImachineRepository.findById(id, filter);
  }

  @patch('/TImachines/{id}')
  @response(204, {
    description: 'TImachine PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TImachine, {partial: true}),
        },
      },
    })
    tImachine: TImachine,
  ): Promise<void> {
    await this.tImachineRepository.updateById(id, tImachine);
  }

  @put('/TImachines/{id}')
  @response(204, {
    description: 'TImachine PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tImachine: TImachine,
  ): Promise<void> {
    await this.tImachineRepository.replaceById(id, tImachine);
  }

  @del('/TImachines/{id}')
  @response(204, {
    description: 'TImachine DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tImachineRepository.deleteById(id);
  }
}
