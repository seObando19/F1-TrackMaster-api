import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pilot } from 'src/schemas/pilot.schema';
import { Model } from 'mongoose';
import { status } from "../pilot/interfaces/pilot/pilot.interface";
/* import { PilotDTO } from "../dto/pilot/index"; */

@Injectable()
export class PilotService {

  constructor(@InjectModel(Pilot.name) private pilotModel: Model<Pilot>) {}

  async getPilots(): Promise<Pilot[]> {
    const pilots = await this.pilotModel.find();
    if(!pilots) throw new NotFoundException('Not found pilots');
    return pilots;
  }

  async getPilotId(id: string): Promise<Pilot> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return pilot;
  }

  async createPilot(payload): Promise<Pilot> {
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
    pilot.status = status.deleted;
    pilot.save();
  }
}
