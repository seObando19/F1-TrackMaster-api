import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { configuration } from '../../../config/configuration';
import { UserService } from './user.service';
import { UserDTO } from './dto';
import { User } from 'src/schemas/user.schema';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { HasRoles } from '../../../config/custom-decorators/roles.decorator';
import { Roles } from './interfaces/user.interface';

@ApiBearerAuth()
@HasRoles(Roles.superAdmin, Roles.admin)
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('User')
@Controller(`api/${configuration().apiVersion}/user`)
export class UserController {
  constructor(private userService: UserService){}

  @Get()
  @ApiQuery({ name:'username', required: false })
  @ApiQuery({ name:'email', required: false })
  getUsers(
    @Query('username') username?: string,
    @Query('email') email?: string
  ):Promise<User[]>{
    let query: any = {};
    if(username) query.username;
    if(email) query.email;
    return this.userService.getUsers(query);
  }

  @Get(':id')
  getUserById(@Param('id') id: string):Promise<User>{
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body() payload: UserDTO[]):Promise<User[]>{
    return this.userService.createUser(payload);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() payload: UserDTO):Promise<User>{
    return this.userService.updateUser(id, payload)
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string):Promise<void>{
    return this.userService.deleteUser(id);
  }
}
