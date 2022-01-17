import { UserService } from '../../../domains'
import { ClassProvider } from '@nestjs/common'
import { USER_SERVICE_TOKEN } from '../constants'

export const UserServiceProvider: ClassProvider = {
  provide: USER_SERVICE_TOKEN,
  useClass: UserService,
}
