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

@Controller('pilot')
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get('conexion')
  testConex(): string {
    return this.pilotService.testConexion();
  }

  @Get()
  getPilots() {
    return this.pilotService.getPilots();
  }

  @Get(':id')
  getPilotId(@Param('id') id: string) {
    return this.pilotService.getPilotId(id);
  }

  @Post()
  createPilot(@Body() pilot: any) {
    this.pilotService.createPilot(pilot);
  }

  @Patch(':id')
  updatePilot(@Param('id') id: string, @Body() pilot: any) {
    return this.pilotService.updatePilot(id, pilot);
  }

  @Delete(':id')
  deletePilot(@Param('id') id: string) {
    return this.pilotService.deletePilot(id);
  }
}
