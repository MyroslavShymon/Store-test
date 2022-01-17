import { Inject, Injectable } from '@nestjs/common'
import { CreateUserDto, UpdateUserDto } from '../../../../application'
import { InjectRepository } from '@nestjs/typeorm'
import {
  BASE_PROVIDER_REPOSITORY,
  // BASE_PROVIDER_REPOSITORY,
  UserRepository,
} from '../../../../infrastructure/database/typeorm/pg/reposetories'

@Injectable()
export class UserService {
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserDto: CreateUserDto) {
    return JSON.stringify(createUserDto)
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
