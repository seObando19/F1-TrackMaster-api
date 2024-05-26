import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from 'src/schemas/team.schema';
import { TeamCreateDTO, TeamUpdateDTO } from './dto';
import { configuration } from '../../../config/configuration';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Status } from './interfaces/team/team.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { HasRoles } from '../../../config/custom-decorators/roles.decorator';
import { Roles } from '../user/interfaces/user.interface';

@ApiTags('Teams')
@Controller(`api/${configuration().apiVersion}/teams`)
export class TeamController {
  constructor( private teamService: TeamService ) {}

  @Get()
  @UseGuards(RolesGuard)
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'status', enum:Status, required: false})
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
  @UseGuards(RolesGuard)
  getTeamById(@Param('id') id: string): Promise<Team> {
    if(!id) throw new NotFoundException('Resource no found');
    return this.teamService.getTeamById(id);
  }

  @Post()
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @ApiBody({type: [TeamCreateDTO]})
  createTeam(@Body() payload: TeamCreateDTO[]): Promise<Team[]> {
    return this.teamService.createTeam(payload);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  updateTeam(@Param('id') id: string, @Body() payload: TeamUpdateDTO): Promise<Team>  {
    return this.teamService.updateTeam(id, payload);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @HasRoles(Roles.superAdmin, Roles.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  deleteTeam(@Param('id') id: string) {
    this.teamService.deleteTeam(id);
  }

}
