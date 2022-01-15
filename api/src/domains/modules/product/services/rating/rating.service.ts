import { Injectable } from '@nestjs/common'
import { CreateRatingDto, UpdateRatingDto } from '../../../../../application'

@Injectable()
export class RatingService {
  create(createRatingDto: CreateRatingDto) {
    return 'This action adds a new rating'
  }

  findAll() {
    return `This action returns all rating`
  }

  findOne(id: number) {
    return `This action returns a #${id} rating`
  }

  update(id: number, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`
  }

  remove(id: number) {
    return `This action removes a #${id} rating`
  }
}
