import { Module } from '@nestjs/common'
import { UserService } from '../../../domains/modules/user/services/user.service'
import { UserController } from '../../../presentation/http/controllers'

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
