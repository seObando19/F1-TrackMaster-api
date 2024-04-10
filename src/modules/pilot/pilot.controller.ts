import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PilotService } from './pilot.service';
import { Pilot } from '../../schemas/pilot.schema';
import { PilotDTO } from './dto';
import { Status } from './interfaces/pilot/pilot.interface';
import { configuration } from '../../../config/configuration';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { HasRoles } from '../../../config/custom-decorators/roles.decorator';
import { Roles } from '../user/interfaces/user.interface';
import { RolesGuard } from '../auth/roles.guard';

@ApiTags('Pilots')
@Controller(`api/${configuration().apiVersion}/pilots`)
export class PilotController {
  constructor(private pilotService: PilotService) {}

  @Get()
  @HasRoles(Roles.superAdmin, Roles.admin, Roles.userRegister)
  @UseGuards(RolesGuard)
  @ApiQuery({name:"name", required:false})
  @ApiQuery({name:"teamId", required:false})
  @ApiQuery({name:"numberUse", required:false})
  @ApiQuery({name:"status", enum:Status, required:false})
  getPilots(
    @Query('name') name?: string,
    @Query('teamId') teamId?: string,
    @Query('numberUse') numberUse?: number,
    @Query('status') status?: Status
    ): Promise<Pilot[]> {
    let query:any = {};

    if(name) query.name = name;
    if(teamId) query.teamCurrent_id = teamId;
    if (numberUse) query.numberUse = numberUse;

    query.status = status ? status : Status.active;

    return this.pilotService.getPilots(query);
  }

  @Get(':id')
  @HasRoles(Roles.superAdmin, Roles.admin, Roles.userRegister)
  @UseGuards(RolesGuard)
  getPilotId(@Param('id') id: string): Promise<Pilot> {
    return this.pilotService.getPilotId(id);
  }

  @Post()
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBody({type: [PilotDTO]})
  createPilot(@Body() payload:PilotDTO[]) {
    return this.pilotService.createPilot(payload);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updatePilot(@Param('id') id: string, @Body() pilot: PilotDTO) {
    return this.pilotService.updatePilot(id, pilot);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deletePilot(@Param('id') id: string): Promise<void> {
    return this.pilotService.deletePilot(id);
  }
}
