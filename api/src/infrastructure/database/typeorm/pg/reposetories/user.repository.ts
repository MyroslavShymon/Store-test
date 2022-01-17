import { EntityRepository, Repository } from 'typeorm'
import {
  BaseRepositoryAbstract,
  User,
  UserRepositoryInterface,
} from '../../../../../domains'
import { InjectRepository } from '@nestjs/typeorm'
import { Inject } from '@nestjs/common'

// export const BASE_PROVIDER_REPOSITORY = 'BASE_PROVIDER_REPOSITORY'
export const BASE_PROVIDER_REPOSITORY = 'BASE_PROVIDER_REPOSITORY'

export function BaseRepositoryProvider(useClass) {
  return {
    provide: BASE_PROVIDER_REPOSITORY,
    useClass,
  }
}

@EntityRepository(User)
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(User)
    public readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository)
  }
}
