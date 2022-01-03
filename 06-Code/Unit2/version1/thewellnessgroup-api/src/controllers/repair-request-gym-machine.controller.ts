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
import {RepairRequestGymMachines} from '../models';
import {RepairRequestGymMachinesRepository} from '../repositories';

export class RepairRequestGymMachineController {
  constructor(
    @repository(RepairRequestGymMachinesRepository)
    public repairRequestGymMachinesRepository: RepairRequestGymMachinesRepository,
  ) { }

  @post('/repair-request-gym-machines')
  @response(200, {
    description: 'RepairRequestGymMachines model instance',
    content: {'application/json': {schema: getModelSchemaRef(RepairRequestGymMachines)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestGymMachines, {
            title: 'NewRepairRequestGymMachines',
            exclude: ['id'],
          }),
        },
      },
    })
    repairRequestGymMachines: Omit<RepairRequestGymMachines, 'id'>,
  ): Promise<RepairRequestGymMachines> {
    return this.repairRequestGymMachinesRepository.create(repairRequestGymMachines);
  }

  @get('/repair-request-gym-machines/count')
  @response(200, {
    description: 'RepairRequestGymMachines model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RepairRequestGymMachines) where?: Where<RepairRequestGymMachines>,
  ): Promise<Count> {
    return this.repairRequestGymMachinesRepository.count(where);
  }

  @get('/repair-request-gym-machines')
  @response(200, {
    description: 'Array of RepairRequestGymMachines model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RepairRequestGymMachines, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RepairRequestGymMachines) filter?: Filter<RepairRequestGymMachines>,
  ): Promise<RepairRequestGymMachines[]> {
    return this.repairRequestGymMachinesRepository.find(filter);
  }

  @patch('/repair-request-gym-machines')
  @response(200, {
    description: 'RepairRequestGymMachines PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestGymMachines, {partial: true}),
        },
      },
    })
    repairRequestGymMachines: RepairRequestGymMachines,
    @param.where(RepairRequestGymMachines) where?: Where<RepairRequestGymMachines>,
  ): Promise<Count> {
    return this.repairRequestGymMachinesRepository.updateAll(repairRequestGymMachines, where);
  }

  @get('/repair-request-gym-machines/{id}')
  @response(200, {
    description: 'RepairRequestGymMachines model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RepairRequestGymMachines, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(RepairRequestGymMachines, {exclude: 'where'}) filter?: FilterExcludingWhere<RepairRequestGymMachines>
  ): Promise<RepairRequestGymMachines> {
    return this.repairRequestGymMachinesRepository.findById(id, filter);
  }

  @patch('/repair-request-gym-machines/{id}')
  @response(204, {
    description: 'RepairRequestGymMachines PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestGymMachines, {partial: true}),
        },
      },
    })
    repairRequestGymMachines: RepairRequestGymMachines,
  ): Promise<void> {
    await this.repairRequestGymMachinesRepository.updateById(id, repairRequestGymMachines);
  }

  @put('/repair-request-gym-machines/{id}')
  @response(204, {
    description: 'RepairRequestGymMachines PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() repairRequestGymMachines: RepairRequestGymMachines,
  ): Promise<void> {
    await this.repairRequestGymMachinesRepository.replaceById(id, repairRequestGymMachines);
  }

  @del('/repair-request-gym-machines/{id}')
  @response(204, {
    description: 'RepairRequestGymMachines DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.repairRequestGymMachinesRepository.deleteById(id);
  }
}
