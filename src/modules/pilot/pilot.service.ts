import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pilot } from 'src/schemas/pilot.schema';
import { CreatePilotDto, GetPilotDto } from '../dto/pilot';
import { Model } from 'mongoose';
import { pilotStatus } from 'src/interfaces/pilot';

@Injectable()
export class PilotService {

  constructor(@InjectModel(Pilot.name) private pilotModel: Model<Pilot>) {}

  async getPilots(): Promise<GetPilotDto[]> {
    return await this.pilotModel.find();
  }

  async getPilotId(id: string): Promise<GetPilotDto> {
    const pilot = await this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return pilot;
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
}
