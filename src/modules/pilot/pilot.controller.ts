import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PilotService } from './pilot.service';
// TODO - configurar los DTO aqui -- import { PilotDTO } from '../dto/pilot/index';
import * as dotenv from "dotenv";
import { Pilot } from 'src/schemas/pilot.schema';

dotenv.config();
const ENVIROMENT_DATA = process.env;

@Controller(`api/${ENVIROMENT_DATA.API_VERSION}/pilots`)
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get()
  getPilots(): Promise<Pilot[]> {
    return this.pilotService.getPilots();
  }

  @Get(':id')
  getPilotId(@Param('id') id: string): Promise<Pilot> {
    return this.pilotService.getPilotId(id);
  }

  @Post()
  createPilot(@Body() payload:any) {
    return this.pilotService.createPilot(payload);
  }

  @Patch(':id')
  updatePilot(@Param('id') id: string, @Body() pilot: any) {
    return this.pilotService.updatePilot(id, pilot);
  }

  @Delete(':id')
  deletePilot(@Param('id') id: string): Promise<void> {
    return this.pilotService.deletePilot(id);
  }
}
