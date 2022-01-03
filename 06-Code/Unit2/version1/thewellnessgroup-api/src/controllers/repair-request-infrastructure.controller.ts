import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {RepairRequestInfrastructure} from '../models';
import {RepairRequestInfrastructureRepository} from '../repositories';

export class RepairRequestInfrastructureController {
  constructor(
    @repository(RepairRequestInfrastructureRepository)
    public repairRequestInfrastructureRepository: RepairRequestInfrastructureRepository,
  ) { }

  @post('/repair-request-infrastructures')
  @response(200, {
    description: 'RepairRequestInfrastructure model instance',
    content: {'application/json': {schema: getModelSchemaRef(RepairRequestInfrastructure)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestInfrastructure, {
            title: 'NewRepairRequestInfrastructure',
            exclude: ['id'],
          }),
        },
      },
    })
    repairRequestInfrastructure: Omit<RepairRequestInfrastructure, 'id'>,
  ): Promise<RepairRequestInfrastructure> {
    return this.repairRequestInfrastructureRepository.create(repairRequestInfrastructure);
  }

  @get('/repair-request-infrastructures/count')
  @response(200, {
    description: 'RepairRequestInfrastructure model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RepairRequestInfrastructure) where?: Where<RepairRequestInfrastructure>,
  ): Promise<Count> {
    return this.repairRequestInfrastructureRepository.count(where);
  }

  @get('/repair-request-infrastructures')
  @response(200, {
    description: 'Array of RepairRequestInfrastructure model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RepairRequestInfrastructure, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RepairRequestInfrastructure) filter?: Filter<RepairRequestInfrastructure>,
  ): Promise<RepairRequestInfrastructure[]> {
    return this.repairRequestInfrastructureRepository.find(filter);
  }

  @patch('/repair-request-infrastructures')
  @response(200, {
    description: 'RepairRequestInfrastructure PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestInfrastructure, {partial: true}),
        },
      },
    })
    repairRequestInfrastructure: RepairRequestInfrastructure,
    @param.where(RepairRequestInfrastructure) where?: Where<RepairRequestInfrastructure>,
  ): Promise<Count> {
    return this.repairRequestInfrastructureRepository.updateAll(repairRequestInfrastructure, where);
  }

  @get('/repair-request-infrastructures/{id}')
  @response(200, {
    description: 'RepairRequestInfrastructure model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RepairRequestInfrastructure, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RepairRequestInfrastructure, {exclude: 'where'}) filter?: FilterExcludingWhere<RepairRequestInfrastructure>
  ): Promise<RepairRequestInfrastructure> {
    return this.repairRequestInfrastructureRepository.findById(id, filter);
  }

  @patch('/repair-request-infrastructures/{id}')
  @response(204, {
    description: 'RepairRequestInfrastructure PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestInfrastructure, {partial: true}),
        },
      },
    })
    repairRequestInfrastructure: RepairRequestInfrastructure,
  ): Promise<void> {
    await this.repairRequestInfrastructureRepository.updateById(id, repairRequestInfrastructure);
  }

  @put('/repair-request-infrastructures/{id}')
  @response(204, {
    description: 'RepairRequestInfrastructure PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() repairRequestInfrastructure: RepairRequestInfrastructure,
  ): Promise<void> {
    await this.repairRequestInfrastructureRepository.replaceById(id, repairRequestInfrastructure);
  }

  @del('/repair-request-infrastructures/{id}')
  @response(204, {
    description: 'RepairRequestInfrastructure DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.repairRequestInfrastructureRepository.deleteById(id);
  }
}
