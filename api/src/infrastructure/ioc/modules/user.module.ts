import { Module } from '@nestjs/common'
import { User, UserService } from '../../../domains'
import { UserController } from '../../../presentation/http/controllers'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  BaseRepositoryProvider,
  UserRepository,
} from '../../database/typeorm/pg/reposetories'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService, BaseRepositoryProvider(UserRepository)],
})
export class UserModule {}
