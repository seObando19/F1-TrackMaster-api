import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import * as dotenv from "dotenv";
import { PilotService } from './pilot.service';
import { Pilot } from '../../schemas/pilot.schema';
import { PilotDTO } from './dto';
import { Status } from './interfaces/pilot/pilot.interface';

dotenv.config();
const ENVIROMENT_DATA = process.env;

@Controller(`api/${ENVIROMENT_DATA.API_VERSION}/pilots`)
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get()
  getPilots(
    @Query('name') name: string,
    @Query('teamId') teamId: string,
    @Query('numberUse') numberUse: number,
    @Query('status') status: Status
    ): Promise<Pilot[]> {
    let query:any = {};

    if(name) query.name = name;
    if(teamId) query.teamCurrent_id = teamId;
    if (numberUse) query.numberUse = numberUse;

    query.status = status ? status : Status.active;

    return this.pilotService.getPilots(query);
  }

  @Get(':id')
  getPilotId(@Param('id') id: string): Promise<Pilot> {
    return this.pilotService.getPilotId(id);
  }

  @Post()
  createPilot(@Body() payload:PilotDTO[]) {
    return this.pilotService.createPilot(payload);
  }

  @Patch(':id')
  updatePilot(@Param('id') id: string, @Body() pilot: PilotDTO) {
    return this.pilotService.updatePilot(id, pilot);
  }

  @Delete(':id')
  deletePilot(@Param('id') id: string): Promise<void> {
    return this.pilotService.deletePilot(id);
  }
}
