import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { configuration } from '../../../config/configuration';
import { SignInDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller(`api/${configuration().apiVersion}/auth`)
export class AuthController {
  constructor(private authService: AuthService){}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDTO: SignInDTO){
    return this.authService.signIn(signInDTO.username, signInDTO.password);
  }

  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }
}
