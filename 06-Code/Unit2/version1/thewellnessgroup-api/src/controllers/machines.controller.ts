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
import {Machines} from '../models';
import {MachinesRepository} from '../repositories';

export class MachinesController {
  constructor(
    @repository(MachinesRepository)
    public machinesRepository : MachinesRepository,
  ) {}

  @post('/machines')
  @response(200, {
    description: 'Machines model instance',
    content: {'application/json': {schema: getModelSchemaRef(Machines)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machines, {
            title: 'NewMachines',
            
          }),
        },
      },
    })
    machines: Machines,
  ): Promise<Machines> {
    return this.machinesRepository.create(machines);
  }

  @get('/machines/count')
  @response(200, {
    description: 'Machines model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Machines) where?: Where<Machines>,
  ): Promise<Count> {
    return this.machinesRepository.count(where);
  }

  @get('/machines')
  @response(200, {
    description: 'Array of Machines model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Machines, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Machines) filter?: Filter<Machines>,
  ): Promise<Machines[]> {
    return this.machinesRepository.find(filter);
  }

  @patch('/machines')
  @response(200, {
    description: 'Machines PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machines, {partial: true}),
        },
      },
    })
    machines: Machines,
    @param.where(Machines) where?: Where<Machines>,
  ): Promise<Count> {
    return this.machinesRepository.updateAll(machines, where);
  }

  @get('/machines/{id}')
  @response(200, {
    description: 'Machines model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Machines, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Machines, {exclude: 'where'}) filter?: FilterExcludingWhere<Machines>
  ): Promise<Machines> {
    return this.machinesRepository.findById(id, filter);
  }

  @patch('/machines/{id}')
  @response(204, {
    description: 'Machines PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Machines, {partial: true}),
        },
      },
    })
    machines: Machines,
  ): Promise<void> {
    await this.machinesRepository.updateById(id, machines);
  }

  @put('/machines/{id}')
  @response(204, {
    description: 'Machines PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() machines: Machines,
  ): Promise<void> {
    await this.machinesRepository.replaceById(id, machines);
  }

  @del('/machines/{id}')
  @response(204, {
    description: 'Machines DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.machinesRepository.deleteById(id);
  }
}
