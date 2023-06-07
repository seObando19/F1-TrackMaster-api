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
import { CreatePilotDto, GetPilotDto } from '../dto/pilot';

@Controller('pilot')
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get()
  getPilots(): Promise<GetPilotDto[]> {
    return this.pilotService.getPilots();
  }

  @Get(':id')
  getPilotId(@Param('id') id: string): Promise<GetPilotDto> {
    return this.pilotService.getPilotId(id);
  }

  @Post()
  createPilot(@Body() pilot: CreatePilotDto) {
    return this.pilotService.createPilot(pilot);
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
