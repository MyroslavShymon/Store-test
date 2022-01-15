import { Module } from '@nestjs/common'
import { RoleService } from '../../../domains/modules/role/services/role.service'
import { RoleController } from '../../../presentation/http/controllers'

@Module({
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
