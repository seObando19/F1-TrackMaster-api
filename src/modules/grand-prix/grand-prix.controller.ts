import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrix } from '../../schemas/grand-prix.schema';
import { GrandPrixDTO } from './dto';
import { configuration } from '../../../config/configuration';


@Controller(`api/${configuration().apiVersion}/grandprixes`)
export class GrandPrixController {

  constructor( private grandPrixService: GrandPrixService) {}

  @Get()
  async GetAllGrandPrix():Promise<GrandPrix[]>{
    return this.grandPrixService.getAllGrandPrix();
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
