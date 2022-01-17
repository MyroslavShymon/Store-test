import { FindManyOptions, Repository } from 'typeorm'
import { BaseRepositoryInterface } from '../interfaces'
import { NotFoundException } from '@nestjs/common'
import { FilterConditionBaseType } from '../types'
import { BaseDeleteResponse, BaseDeleteResponseInterface } from '../../shared'

export class BaseRepositoryAbstract<T> implements BaseRepositoryInterface<T> {
  private entity: Repository<T>

  protected constructor(entity: Repository<T | any>) {
    this.entity = entity
  }

  public async create(data: T): Promise<T> {
    return await this.entity.save(data)
  }

  public async findOneById(id: number): Promise<T> {
    const essence: T = await this.entity.findOne(id)
    if (!essence)
      throw new NotFoundException(
        `Not found ${this.entity.metadata.tableName} with id ${id}`,
      )
    return essence
  }

  public async findByCondition(
    filterCondition: FilterConditionBaseType<T>,
  ): Promise<T> {
    const essence: T = await this.entity.findOne({ where: filterCondition })
    if (!essence)
      throw new NotFoundException(`Not found ${this.entity.metadata.tableName}`)
    return essence
  }

  public async findWithRelations(relations: FindManyOptions<T>): Promise<T[]> {
    return await this.entity.find(relations)
  }

  public async findAll(): Promise<T[]> {
    return await this.entity.find()
  }

  public async removeById(id: number): Promise<BaseDeleteResponseInterface> {
    const deleteResult = await this.entity.delete(id)
    return new BaseDeleteResponse(deleteResult)
  }

  public async remove(): Promise<BaseDeleteResponseInterface> {
    const deleteResult = await this.entity
      .createQueryBuilder()
      .delete()
      .execute()
    return new BaseDeleteResponse(deleteResult, 'All rows delete success')
  }
}
