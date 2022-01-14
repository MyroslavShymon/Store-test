import {Module} from '@nestjs/common'
import {AuthModule} from './auth/auth.module'
import {ConfigModule} from '../config/own-config.module'

// import { provideTypeOrmModule } from '../config/services'

@Module({
  imports: [ConfigModule.forRoot(),
    // provideTypeOrmModule(),
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
