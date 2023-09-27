import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from '../dto/team';
import { TeamDTO, UpdateTeamDTO } from '../dto/team/team.dto';

@Controller('api/v1/team')
export class TeamController {
  constructor( private teamService: TeamService ) {}

  @Get()
  getTeams(): Promise<TeamDTO[]> {
    return this.teamService.getTeams();
  }

  @Get(':id')
  getTeamById(@Param('id') id: string): Promise<TeamDTO[]> {
    if(!id) throw new NotFoundException('Resource no found');
    return this.teamService.getTeamById(id);
  }

  @Post()
  createTeam(@Body() payload: CreateTeamDto): Promise<CreateTeamDto> {
    return this.teamService.createTeam(payload);
  }

  @Patch(':id')
  updateTeam(@Param('id') id: string, @Body() payload: UpdateTeamDTO): Promise<TeamDTO>  {
    return this.teamService.updateTeam(id, payload);
  }

  @Delete(':id')
  deleteTeam(@Param('id') id: string) {
    this.teamService.deleteTeam(id);
  }

}
