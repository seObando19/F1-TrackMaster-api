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
    return teams;
  }

  async getTeamById(id: string):Promise<Team> {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    return team;
  }

  async createTeam(payload: CreateTeamDto): Promise<Team> {
    const createTeam = new this.teamModel(payload);
    return await createTeam.save();
  }

  async updateTeam(id: string, payload: UpdateTeamDTO): Promise<Team> {
    if(!id || !payload) throw new NotFoundException('Resource no found');
    const teamUpdated = await this.teamModel.findByIdAndUpdate(id, payload);
    const teamRegister = this.getTeamById(id);
    return teamRegister;
  }

  async deleteTeam(id: string) {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    team.status = statusTeams.deleted;
    team.save();
  }
}
