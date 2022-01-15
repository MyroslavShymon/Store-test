import { Module } from '@nestjs/common'
import { CategoryService } from '../../../domains/modules/category/services/category.service'
import { CategoryController } from '../../../presentation/http/controllers'

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
