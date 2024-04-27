import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pilot } from '../../schemas/pilot.schema';
import { Status } from "../pilot/interfaces/pilot/pilot.interface";

import { TeamService } from "../team/team.service";
import { Team } from '../../schemas/team.schema';

@Injectable()
export class PilotService {

  constructor(@InjectModel(Pilot.name) private pilotModel: Model<Pilot>, private teamService:TeamService) {}

  async getPilots(query?): Promise<Pilot[]> {
    const pilots = await this.pilotModel.find(query);
    if(!pilots) throw new NotFoundException('Not found pilots');
    return pilots;
  }

  async getPilotId(id: string): Promise<Pilot> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return pilot;
  }

  async createPilot(payload: Pilot[]): Promise<Pilot[]> {
    let pilots: Pilot[] = [];
    for (let index = 0; index < payload.length; index++) {
      const element = payload[index];
      const createdPilot = new this.pilotModel(element);

      const isNumberUse: boolean = await this.validateUsignNumberPilot(createdPilot.numberUse);
      if(isNumberUse) throw new HttpException(`Number ${createdPilot.numberUse} is using by other pilot`, HttpStatus.BAD_REQUEST);

      pilots.push(await createdPilot.save());
      if(createdPilot.teamCurrent_id){
        this.addPilotInTeam(createdPilot.teamCurrent_id, createdPilot.id);
      }
    }
    return pilots;
  }

  async updatePilot(id: string, payload: Partial<Pilot>):Promise<Pilot> {
    if (!id && !payload) throw new NotFoundException('Resource no found');
    await this.pilotModel.findByIdAndUpdate(id, payload);
    const pilotUpdated = await this.getPilotId(id);
    return pilotUpdated;
  }

  async deletePilot(id: string): Promise<void> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    pilot.status = Status.deleted;
    pilot.save();
  }

  async addPilotInTeam(teamId:Team, pilotId:string) {
    const team_id = String(teamId);
    const pilot_id: string = pilotId;

    const team = await this.teamService.getTeamById(team_id);
    if(!team.pilots.includes(pilot_id)){
      team.pilots.push(pilot_id);
      this.teamService.updateTeam(team_id, team);
    }
  }

  async validateUsignNumberPilot(validateNumber:number): Promise<boolean>{
    const pilot: Pilot[] = await this.getPilots({numberUse: validateNumber});
    if(pilot[0]) return true;
    return false;
  }
}
