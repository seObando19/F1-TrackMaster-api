import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrix } from 'src/schemas/grand-prix.schema';
import { GrandPrixDTO } from './dto';
import * as dotenv from "dotenv";

dotenv.config();
const ENVIROMENT_DATA = process.env;


@Controller(`api/${ENVIROMENT_DATA.API_VERSION}/grandprixes`)
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
  async createGrandPrix(@Body() payload: GrandPrixDTO) {
    return this.grandPrixService.createGrandPrix(payload);
  }

  @Put()
  async updateGrandPrix(@Param('id') id: string, @Body() payload: GrandPrixDTO) {
    return this.grandPrixService.updateGrandPrix(id, payload);
  }

  @Delete()
  async deleteGrandPrix(@Param('id') id: string) {
    return this.grandPrixService.deleteGrandPrix(id);
  }
}
