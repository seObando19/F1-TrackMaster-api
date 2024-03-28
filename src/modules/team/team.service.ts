import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from '../../schemas/team.schema';
import { Status } from "./interfaces/team/team.interface";

@Injectable()
export class TeamService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async getTeams(query?):Promise<Team[]> {
    const teams = await this.teamModel.find(query);
    return teams;
  }

  async getTeamById(id: string):Promise<Team> {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    return team;
  }

  async createTeam(payload: Team[]): Promise<Team[]> {
    let teams: Team[] = [];
    for (let index = 0; index < payload.length; index++) {
      const element = payload[index];
      const createTeam = new this.teamModel(element);
      teams.push(await createTeam.save());
    }
    return teams;
  }

  async updateTeam(id: string, payload: Team): Promise<Team> {
    if(!id || !payload) throw new NotFoundException('Resource no found');
    await this.teamModel.findByIdAndUpdate(id, payload);
    const teamRegister = this.getTeamById(id);
    return teamRegister;
  }

  async deleteTeam(id: string) {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    team.status = Status.deleted;
    team.save();
  }
}
