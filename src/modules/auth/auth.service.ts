import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService){}

  async signIn(username: string, pass:string){
    const rta = await this.userService.getUsers({username: `${username}`});
    const user = rta[0];
    if(!user) throw new HttpException('USER_NOT_FOUND', 404);

    const isMatch = await this.userService.validateHashPassword(pass, user.password);
    if(!isMatch) throw new HttpException('PASSWORD_INVALID', 403);

    const payload = { sub: user._id,  name: user.name};
    const token = await this.jwtService.signAsync(payload)

    const data = {
      user: user,
      token
    }

    return data;
  }
}
