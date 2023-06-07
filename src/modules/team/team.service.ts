import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from 'src/schemas/team.schema';
import { CreateTeamDto, statusTeams } from '../dto/team';
import { TeamDTO, UpdateTeamDTO } from '../dto/team/team.dto';

@Injectable()
export class TeamService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async getTeams() {
    const teams = await this.teamModel.find();
    const rtaMapper = teams.map( t => this.mapperTeam(t));
    return rtaMapper;
  }

  async getTeamById(id: string) {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    return this.mapperTeam(team);
  }

  async createTeam(payload: CreateTeamDto): Promise<CreateTeamDto> {
    const createTeam = new this.teamModel(payload);
    return createTeam.save();
  }

  async updateTeam(id: string, payload: UpdateTeamDTO): Promise<TeamDTO> {
    if(!id || !payload) throw new NotFoundException('Resource no found');
    const teamUpdated = await this.teamModel.findByIdAndUpdate(id, payload);
    return this.mapperTeam(teamUpdated);
  }

  async deleteTeam(id: string) {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    team.status = statusTeams.deleted;
    team.save();
  }

  mapperTeam(team) {
    const teamRta: TeamDTO = {
      id: team.id,
      name: team.name,
      headquarters: team.headquarters,
      countryOrigin: team.countryOrigin,
      status: team.status,
      startYear: team.startYear
    }
    return teamRta;
  }

}
