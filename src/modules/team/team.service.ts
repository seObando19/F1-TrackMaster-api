import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from 'src/schemas/team.schema';
import { CreateTeamDto, statusTeams } from '../dto/team';
import { TeamDTO, UpdateTeamDTO } from '../dto/team/team.dto';

@Injectable()
export class TeamService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async getTeams():Promise<TeamDTO[]> {
    const teams = await this.teamModel.find();
    return this.mapperTeam(teams);
  }

  async getTeamById(id: string):Promise<TeamDTO[]> {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    return this.mapperTeam(team);
  }

  async createTeam(payload: CreateTeamDto): Promise<CreateTeamDto> {
    const createTeam = new this.teamModel(payload);
    return await createTeam.save();
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

  mapperTeam(obj:any) {
    let teams: any;
    if(!obj || obj === undefined || obj === null) throw new NotFoundException('Resourse no found');
    teams = obj.map((team) => {
      id: team.id;
      name: team.name;
      headquarters: team.headquarters;
      countryOrigin: team.countryOrigin;
      status: team.status;
      startYear: team.startYear
    });
    return teams;
  }

}
