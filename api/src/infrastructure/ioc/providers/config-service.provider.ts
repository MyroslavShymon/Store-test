import { ConfigService } from '../../nest'
import { CONFIG_SERVICE } from '../constants'

export const ConfigServiceProvider = {
  provide: CONFIG_SERVICE,
  useValue: new ConfigService(process.env),
}
