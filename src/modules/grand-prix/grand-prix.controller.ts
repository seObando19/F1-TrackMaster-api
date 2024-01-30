import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrixDTO, createGrandPrix } from '../dto/grand-prix';


@Controller('api/v1/grand-prix')
export class GrandPrixController {

  constructor( private grandPrixService: GrandPrixService) {}

  @Get()
  async GetAllGrandPrix():Promise<GrandPrixDTO[]>{
    return this.grandPrixService.getAllGrandPrix();
  }

  @Get(':id')
  async GetGrandPrixById(@Param('id') id: string): Promise<GrandPrixDTO> {
    return this.grandPrixService.getGrandPrixById(id);
  }

  @Post()
  async createGrandPrix(@Body() payload: createGrandPrix) {
    return this.grandPrixService.createGrandPrix(payload);
  }

  @Put()
  async updateGrandPrix(@Param('id') id: string, @Body() payload: any) {
    return this.grandPrixService.updateGrandPrix(id, payload);
  }

  @Delete()
  async deleteGrandPrix(@Param('id') id: string) {
    return this.grandPrixService.deleteGrandPrix(id);
  }
}
