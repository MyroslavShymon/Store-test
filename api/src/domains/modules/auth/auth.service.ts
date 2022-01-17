import { Injectable } from '@nestjs/common'
import { CreateAuthDto } from './dto/create-auth.dto'
import { UserService } from '../user'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    // private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    // const user = await this.usersService.findOne(username);
    // if (user && user.password === pass) {
    //   const { password, ...result } = user;
    //   return result;
    // }
    return null
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  //
  // create(createAuthDto: CreateAuthDto) {
  //   return 'This action adds a new auth'
  // }
}
