import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from 'src/schemas/team.schema';
// TODO implementar DTO -- import { CreateTeamDto } from '../dto/team';
// TODOD implementar DTO -- import { TeamDTO, UpdateTeamDTO } from '../dto/team/team.dto';
import { status } from "./interfaces/team/team.interface";

@Injectable()
export class TeamService {

  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) {}

  async getTeams():Promise<Team[]> {
    const teams = await this.teamModel.find();
    return teams;
  }

  async getTeamById(id: string):Promise<Team> {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    return team;
  }

  async createTeam(payload: any): Promise<Team> {
    const createTeam = new this.teamModel(payload);
    return await createTeam.save();
  }

  async updateTeam(id: string, payload: any): Promise<Team> {
    if(!id || !payload) throw new NotFoundException('Resource no found');
    await this.teamModel.findByIdAndUpdate(id, payload);
    const teamRegister = this.getTeamById(id);
    return teamRegister;
  }

  async deleteTeam(id: string) {
    const team = await this.teamModel.findById(id);
    if(!team) throw new NotFoundException('Resource no found');
    team.status = status.deleted;
    team.save();
  }
}
