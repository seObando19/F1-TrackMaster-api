import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pilot } from 'src/schemas/pilot.schema';
import { CreatePilotDto, GetPilotDto } from './dto/pilot.dto';
import { Model } from 'mongoose';

@Injectable()
export class PilotService {
  pilots = [
    {
      id: '1',
      name: 'Lewis Hamilton',
    },
    {
      id: '2',
      name: 'Charles Lecler',
    },
    {
      id: '3',
      name: 'Max Vertappen',
    },
  ];

  constructor(@InjectModel(Pilot.name) private pilotModel: Model<Pilot>) {}

  getPilots(): Promise<GetPilotDto[]> {
    return this.pilotModel.find();
  }

  getPilotId(id: string): Promise<GetPilotDto> {
    const pilot = this.pilotModel.findById(id);
    if (!pilot) throw new NotFoundException('Resource no found');
    return pilot;
  }

  async createPilot(createPilot: CreatePilotDto): Promise<Pilot> {
    const createdPilot = new this.pilotModel(createPilot);
    return createdPilot.save();
  }

  updatePilot(id: string, pilot) {
    const getPilot = this.pilots.find((p) => p.id === id);
    if (!getPilot) throw new NotFoundException('Resource no found');
    getPilot.name = pilot.name;
    return getPilot;
  }

  deletePilot(id: string) {
    const getPilot = this.pilots.findIndex((p) => p.id === id);
    if (!getPilot) throw new NotFoundException('Resource no found');
    this.pilots.splice(getPilot, 1);
  }
}
