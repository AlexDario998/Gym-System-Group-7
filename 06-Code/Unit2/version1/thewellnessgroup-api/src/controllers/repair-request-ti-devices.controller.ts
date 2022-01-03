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
import {RepairRequestTiDevices} from '../models';
import {RepairRequestTiDevicesRepository} from '../repositories';

export class RepairRequestTiDevicesController {
  constructor(
    @repository(RepairRequestTiDevicesRepository)
    public repairRequestTiDevicesRepository : RepairRequestTiDevicesRepository,
  ) {}

  @post('/repair-request-ti-devices')
  @response(200, {
    description: 'RepairRequestTiDevices model instance',
    content: {'application/json': {schema: getModelSchemaRef(RepairRequestTiDevices)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestTiDevices, {
            title: 'NewRepairRequestTiDevices',
            exclude: ['id'],
          }),
        },
      },
    })
    repairRequestTiDevices: Omit<RepairRequestTiDevices, 'id'>,
  ): Promise<RepairRequestTiDevices> {
    return this.repairRequestTiDevicesRepository.create(repairRequestTiDevices);
  }

  @get('/repair-request-ti-devices/count')
  @response(200, {
    description: 'RepairRequestTiDevices model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RepairRequestTiDevices) where?: Where<RepairRequestTiDevices>,
  ): Promise<Count> {
    return this.repairRequestTiDevicesRepository.count(where);
  }

  @get('/repair-request-ti-devices')
  @response(200, {
    description: 'Array of RepairRequestTiDevices model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RepairRequestTiDevices, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RepairRequestTiDevices) filter?: Filter<RepairRequestTiDevices>,
  ): Promise<RepairRequestTiDevices[]> {
    return this.repairRequestTiDevicesRepository.find(filter);
  }

  @patch('/repair-request-ti-devices')
  @response(200, {
    description: 'RepairRequestTiDevices PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestTiDevices, {partial: true}),
        },
      },
    })
    repairRequestTiDevices: RepairRequestTiDevices,
    @param.where(RepairRequestTiDevices) where?: Where<RepairRequestTiDevices>,
  ): Promise<Count> {
    return this.repairRequestTiDevicesRepository.updateAll(repairRequestTiDevices, where);
  }

  @get('/repair-request-ti-devices/{id}')
  @response(200, {
    description: 'RepairRequestTiDevices model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RepairRequestTiDevices, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RepairRequestTiDevices, {exclude: 'where'}) filter?: FilterExcludingWhere<RepairRequestTiDevices>
  ): Promise<RepairRequestTiDevices> {
    return this.repairRequestTiDevicesRepository.findById(id, filter);
  }

  @patch('/repair-request-ti-devices/{id}')
  @response(204, {
    description: 'RepairRequestTiDevices PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RepairRequestTiDevices, {partial: true}),
        },
      },
    })
    repairRequestTiDevices: RepairRequestTiDevices,
  ): Promise<void> {
    await this.repairRequestTiDevicesRepository.updateById(id, repairRequestTiDevices);
  }

  @put('/repair-request-ti-devices/{id}')
  @response(204, {
    description: 'RepairRequestTiDevices PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() repairRequestTiDevices: RepairRequestTiDevices,
  ): Promise<void> {
    await this.repairRequestTiDevicesRepository.replaceById(id, repairRequestTiDevices);
  }

  @del('/repair-request-ti-devices/{id}')
  @response(204, {
    description: 'RepairRequestTiDevices DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.repairRequestTiDevicesRepository.deleteById(id);
  }
}
