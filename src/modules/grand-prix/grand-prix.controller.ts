import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrix } from '../../schemas/grand-prix.schema';
import { GrandPrixCreateDTO, GrandPrixUpdateDTO } from './dto';
import { configuration } from '../../../config/configuration';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Status } from './interfaces/grand-prix/grand-prix.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HasRoles } from '../../../config/custom-decorators/roles.decorator';
import { Roles } from '../user/interfaces/user.interface';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('GrandPrixes')
@Controller(`api/${configuration().apiVersion}/grandprixes`)
export class GrandPrixController {

  constructor( private grandPrixService: GrandPrixService) {}

  @Get()
  @UseGuards(RolesGuard)
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'status', enum: Status, required: false})
  async GetAllGrandPrix(
    @Query('name') name: string,
    @Query('status') status: Status
  ):Promise<GrandPrix[]>{
    let query:any = {};

    if(name) query.name = name;
    query.status = status ? status : Status.active;
    return this.grandPrixService.getAllGrandPrix(query);
  }

  @Get(':id')
  @UseGuards(RolesGuard)
  async GetGrandPrixById(@Param('id') id: string): Promise<GrandPrix> {
    return this.grandPrixService.getGrandPrixById(id);
  }

  @Post()
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBody({type:[GrandPrixCreateDTO]})
  async createGrandPrix(@Body() payload: GrandPrixCreateDTO[]): Promise<GrandPrix[]> {
    return this.grandPrixService.createGrandPrix(payload);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async updateGrandPrix(@Param('id') id: string, @Body() payload: GrandPrixUpdateDTO): Promise<GrandPrix> {
    return this.grandPrixService.updateGrandPrix(id, payload);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async deleteGrandPrix(@Param('id') id: string): Promise<void> {
    return this.grandPrixService.deleteGrandPrix(id);
  }
}
