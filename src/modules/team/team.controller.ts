import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from 'src/schemas/team.schema';
import { TeamDTO } from './dto';
import { configuration } from 'config/configuration';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Status } from './interfaces/team/team.interface';

@ApiTags('Teams')
@Controller(`api/${configuration().apiVersion}/teams`)
export class TeamController {
  constructor( private teamService: TeamService ) {}

  @Get()
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'status', required: false})
  getTeams(
    @Query('name') name: string,
    @Query('status') status: Status
  ): Promise<Team[]> {
    let query:any = {};

    if(name) query.name = name;
    query.status = status ? status : Status.active;

    return this.teamService.getTeams(query);
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
