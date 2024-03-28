import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrix } from '../../schemas/grand-prix.schema';
import { GrandPrixDTO } from './dto';
import { configuration } from '../../../config/configuration';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Status } from './interfaces/grand-prix/grand-prix.interface';

@ApiTags('GrandPrixes')
@Controller(`api/${configuration().apiVersion}/grandprixes`)
export class GrandPrixController {

  constructor( private grandPrixService: GrandPrixService) {}

  @Get()
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'status', required: false})
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
  async GetGrandPrixById(@Param('id') id: string): Promise<GrandPrix> {
    return this.grandPrixService.getGrandPrixById(id);
  }

  @Post()
  async createGrandPrix(@Body() payload: GrandPrixDTO[]): Promise<GrandPrix[]> {
    return this.grandPrixService.createGrandPrix(payload);
  }

  @Put()
  async updateGrandPrix(@Param('id') id: string, @Body() payload: GrandPrixDTO): Promise<GrandPrix> {
    return this.grandPrixService.updateGrandPrix(id, payload);
  }

  @Delete()
  async deleteGrandPrix(@Param('id') id: string): Promise<void> {
    return this.grandPrixService.deleteGrandPrix(id);
  }
}
