import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { configuration } from '../../../config/configuration';
import { SignInDTO } from './dto';
import { ApiTags } from '@nestjs/swagger';
/* import { AuthGuard } from './auth.guard';
import { Public } from '../../../config/custom-decorators/public.auth'; */

@ApiTags('Auth')
@Controller(`api/${configuration().apiVersion}/auth`)
export class AuthController {
  constructor(private authService: AuthService){}

  @HttpCode(HttpStatus.OK)
  /* @Public() */
  @Post('login')
  signIn(@Body() signInDTO: SignInDTO){
    return this.authService.signIn(signInDTO.username, signInDTO.password);
  }

  /* @UseGuards(AuthGuard) */
  @Get('profile')
  getProfile(@Request() req){
    return req.user
  }
}
