import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GrandPrix } from '../../schemas/grand-prix.schema';

@Injectable()
export class GrandPrixService {

  constructor(@InjectModel(GrandPrix.name) private grandPrixModel: Model<GrandPrix>) {}

  async getAllGrandPrix(): Promise<GrandPrix[]> {
    return this.grandPrixModel.find();
  }

  async getGrandPrixById(id: string): Promise<GrandPrix> {
    const gp = this.grandPrixModel.findById(id);
    if(!gp) throw new NotFoundException('Resource no found');
    return gp;
  }

  async createGrandPrix(payload: GrandPrix[]): Promise<GrandPrix[]> {
    let gps: GrandPrix[] = [];
    for (let index = 0; index < payload.length; index++) {
      const element = payload[index];
      const gpCreate = new this.grandPrixModel(element);
      gps.push(await gpCreate.save());
    }
    return gps;
  }

  async updateGrandPrix(id: string, payload: GrandPrix): Promise<GrandPrix> {
    if(!id && !payload) throw new NotFoundException('Resource no found');
    const gp = this.grandPrixModel.findByIdAndUpdate(id, payload);
    return gp;
  }

  async deleteGrandPrix(id: string): Promise<void> {
    if(!id) throw new NotFoundException('Resource no found');
    this.grandPrixModel.findByIdAndDelete(id);
  }
}
