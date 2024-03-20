import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService){}

  async signIn(username: string, pass:string):Promise<{ access_token:string }>{
    const rta = await this.userService.getUsers({username: `${username}`});
    const user = rta[0];
    const isMatch = await this.userService.validateHashPassword(pass, user.password);
    if(!isMatch){
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id,  username: user.username, roles: user.roles };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
