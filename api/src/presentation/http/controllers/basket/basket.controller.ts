import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { BasketService } from '../../../../domains/modules/basket/services/basket.service'
import { CreateBasketDto, UpdateBasketDto } from '../../../../application'

@Controller('basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Post()
  create(@Body() createBasketDto: CreateBasketDto) {
    return this.basketService.create(createBasketDto)
  }

  @Get()
  findAll() {
    return this.basketService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basketService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasketDto: UpdateBasketDto) {
    return this.basketService.update(+id, updateBasketDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basketService.remove(+id)
  }
}
