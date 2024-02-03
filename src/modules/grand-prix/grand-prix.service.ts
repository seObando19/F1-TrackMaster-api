import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GrandPrix } from 'src/schemas/grand-prix.schema';
// TODO implementar DTO --- import { createGrandPrix, GrandPrixDTO } from '../dto/grand-prix';

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

  async createGrandPrix(payload: any): Promise<GrandPrix> {
    const gp = new this.grandPrixModel(payload);
    return gp.save();
  }

  async updateGrandPrix(id: string, payload: any) {
    if(!id && !payload) throw new NotFoundException('Resource no found');
    const gp = this.grandPrixModel.findByIdAndUpdate(id, payload);
    return gp;
  }

  async deleteGrandPrix(id: string) {
    if(!id) throw new NotFoundException('Resource no found');
    this.grandPrixModel.findByIdAndDelete(id);
  }
}
