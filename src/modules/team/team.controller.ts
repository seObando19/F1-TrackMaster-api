import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from 'src/schemas/team.schema';
import { TeamDTO } from './dto';
import * as dotenv from "dotenv";

dotenv.config();
const ENVIROMENT_DATA = process.env;

@Controller(`api/${ENVIROMENT_DATA.API_VERSION}/teams`)
export class TeamController {
  constructor( private teamService: TeamService ) {}

  @Get()
  getTeams(): Promise<Team[]> {
    return this.teamService.getTeams();
  }

  @Get(':id')
  getTeamById(@Param('id') id: string): Promise<Team> {
    if(!id) throw new NotFoundException('Resource no found');
    return this.teamService.getTeamById(id);
  }

  @Post()
  createTeam(@Body() payload: TeamDTO[]): Promise<Team[]> {
    return this.teamService.createTeam(payload);
  }

  @Patch(':id')
  updateTeam(@Param('id') id: string, @Body() payload: TeamDTO): Promise<Team>  {
    return this.teamService.updateTeam(id, payload);
  }

  @Delete(':id')
  deleteTeam(@Param('id') id: string) {
    this.teamService.deleteTeam(id);
  }

}
