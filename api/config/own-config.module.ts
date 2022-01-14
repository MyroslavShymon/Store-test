import { Global, Module } from '@nestjs/common'
import { ConfigModule as NestDefaultConfigModule } from '@nestjs/config'
import { CONFIG_SERVICE } from './constants'
import { ConfigServiceProvider } from './providers'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

@Global()
@Module({
  imports: [
    NestDefaultConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'production' ? '.env' : ' .development.env ',
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', '..', '..', '..', 'static'),
    }),
  ],
  exports: [NestDefaultConfigModule],
})
export class ConfigModule {
  static forRoot() {
    return {
      module: ConfigModule,
      providers: [ConfigServiceProvider],
      exports: [CONFIG_SERVICE],
    }
  }
}
