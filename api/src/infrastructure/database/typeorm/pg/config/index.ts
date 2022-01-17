import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '../../../../nest'
import { CONFIG_SERVICE } from '../../../../ioc'

export class DatabaseConfigService {
  static provideTypeOrmModule = (entities) =>
    TypeOrmModule.forRootAsync({
      inject: [CONFIG_SERVICE],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getValue('POSTGRES_HOST'),
        port: parseInt(configService.getValue('POSTGRES_PORT')),
        username: configService.getValue('POSTGRES_USER'),
        password: configService.getValue('POSTGRES_PASSWORD'),
        database: configService.getValue('POSTGRES_DB'),
        synchronize: Boolean(configService.getValue('POSTGRES_SYNCHRONIZE')),
        autoLoadEntities: Boolean(
          configService.getValue('POSTGRES_AUTO_LOAD_ENTITIES'),
        ),
        entities,
      }),
    })
}
