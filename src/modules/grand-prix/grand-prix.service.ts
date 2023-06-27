import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GrandPrix } from 'src/schemas/grand-prix.schema';
import { createGrandPrix, GrandPrixDTO } from '../dto/grand-prix';

@Injectable()
export class GrandPrixService {

  constructor(@InjectModel(GrandPrix.name) private grandPrixModel: Model<GrandPrix>) {}

  async getAllGrandPrix(): Promise<GrandPrixDTO[]> {
    return this.grandPrixModel.find();
  }

  async getGrandPrixById(id: string): Promise<GrandPrixDTO> {
    const gp = this.grandPrixModel.findById(id);
    if(!gp) throw new NotFoundException('Resource no found');
    return gp;
  }

  async createGrandPrix(payload: createGrandPrix): Promise<createGrandPrix> {
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

  mapperGP(gp: GrandPrix) {
    return {
      name: gp.name,
      country: gp.country,
      circuit_id: gp.circuit_id,
      yearsSeason: gp.yearsSeason,
      yearStart: gp.yearStart
    };
  }

}
