import { Module } from '@nestjs/common'
import { ProductService } from '../../../domains/modules/product/services/product/product.service'
import { ProductController } from '../../../presentation/http/controllers'

@Module({
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
