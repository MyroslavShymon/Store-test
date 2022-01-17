import { Module } from '@nestjs/common'
import { AuthModule } from './domains/modules/auth/auth.module'
import { ConfigModule } from './infrastructure/nest'

// import { provideTypeOrmModule } from '../config/services'
import {
  UserModule,
  BasketModule,
  RoleModule,
  ProductModule,
} from './infrastructure/ioc'
import { User } from './domains'
import { DatabaseConfigService } from './infrastructure/database/typeorm/pg/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseConfigService.provideTypeOrmModule([User]),
    AuthModule,
    UserModule,
    ProductModule,
    BasketModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
