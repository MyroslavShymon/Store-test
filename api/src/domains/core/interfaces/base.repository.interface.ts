import { FilterConditionBaseType } from '../types'
import { FindManyOptions } from 'typeorm'
import { BaseDeleteResponseInterface } from '../../shared'

export interface BaseRepositoryInterface<T> {
  create(data: T): Promise<T>

  findOneById?(id: number): Promise<T>

  findByCondition?(filterCondition: FilterConditionBaseType<T>): Promise<T>

  findAll(): Promise<T[]>

  removeById(id: number): Promise<BaseDeleteResponseInterface>

  remove(): Promise<BaseDeleteResponseInterface>

  findWithRelations?(relations: FindManyOptions<T>): Promise<T[]>
}
