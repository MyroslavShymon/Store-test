import { Module } from '@nestjs/common'
import { RatingService } from '../../../domains/modules/product/services/rating/rating.service'
import { RatingController } from '../../../presentation/http/controllers'

@Module({
  controllers: [RatingController],
  providers: [RatingService],
})
export class RatingModule {}
