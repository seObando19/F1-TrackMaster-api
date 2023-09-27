import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pilot } from 'src/schemas/pilot.schema';
import { Model } from 'mongoose';
import { pilotStatus } from 'src/interfaces/pilot';
import { CreatePilotDto, PilotDTO } from "../dto/pilot/index";

@Injectable()
export class PilotService {

  constructor(@InjectModel(Pilot.name) private pilotModel: Model<Pilot>) {}

  async getPilots(): Promise<PilotDTO[]> {
    const pilots = await this.pilotModel.find();
    if(!pilots) throw new NotFoundException('Not found pilots');
    return await this.pilotMap(pilots);
  }

  async getPilotId(id: string): Promise<PilotDTO[]> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return await this.pilotMap(pilot);
  }

  async createPilot(payload: CreatePilotDto): Promise<Pilot> {
    const createdPilot = new this.pilotModel(payload);
    return createdPilot.save();
  }

  async updatePilot(id: string, payload: any) {
    if (!id && !payload) throw new NotFoundException('Resource no found');
    const pilotUpdated = await this.pilotModel.findByIdAndUpdate(id, payload);
    return pilotUpdated;
  }

  async deletePilot(id: string): Promise<void> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    pilot.status = pilotStatus.deleted;
    pilot.save();
  }

  async pilotMap(obj:any){
    let regis:any;
    if(!obj || obj === undefined || obj === null) throw new NotFoundException('Resourse no found');
    regis = obj.map((pilot) => {
      name: pilot.name;
      lastname: pilot.lastname;
      nickname: pilot.nickname;
      age: pilot.age;
      nationality: pilot.nationality
    });

    return regis;
  }
}
