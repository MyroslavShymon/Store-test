import { EntityRepository, Repository } from 'typeorm'
import {
  BaseRepositoryAbstract,
  User,
  UserRepositoryInterface,
} from '../../../../../domains'
import { InjectRepository } from '@nestjs/typeorm'

@EntityRepository(User)
export class UserRepository
  extends BaseRepositoryAbstract<User>
  implements UserRepositoryInterface
{
  constructor(
    // @Inject(BASE_PROVIDER_REPOSITORY)
    @InjectRepository(User)
    public readonly usersRepository: Repository<User>,
  ) {
    super(usersRepository)
  }
}
