import { Module } from '@nestjs/common'
import { AuthModule } from './domains/modules/auth/auth.module'
import { ConfigModule } from './infrastructure/nest'

// import { provideTypeOrmModule } from '../config/services'
import {
  UserModule,
  RatingModule,
  BasketModule,
  CategoryModule,
  RoleModule,
  ProductModule,
} from './infrastructure/ioc'

@Module({
  imports: [
    ConfigModule.forRoot(),
    // provideTypeOrmModule(),
    AuthModule,
    UserModule,
    ProductModule,
    RatingModule,
    BasketModule,
    CategoryModule,
    RoleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
