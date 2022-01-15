import { Module } from '@nestjs/common'
import { BasketService } from '../../../domains/modules/basket/services/basket.service'
import { BasketController } from '../../../presentation/http/controllers'

@Module({
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
