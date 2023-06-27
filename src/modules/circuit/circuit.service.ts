import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Circuit } from 'src/schemas/circuit.schema';

@Injectable()
export class CircuitService {

  constructor(@InjectModel(Circuit.name) private circuitModel: Model<Circuit>){}

  async getAllCircuits(){
    return this.circuitModel.find();
  }

  async getCircuitById(idCircuit: string) {
    const circuit = this.circuitModel.findById(idCircuit);
    if(!circuit) throw new NotFoundException('Resource no Found');
    return circuit;
  }

  async createCircuit(payload: any) {
    const circuit = new this.circuitModel(payload);
    return circuit.save();
  }

  async updateCircuit(idCircuit: string, payload: any) {
    if(!idCircuit && !payload) throw new NotFoundException('Resource no found');
    const circuit = this.circuitModel.findByIdAndUpdate(idCircuit, payload);
    return circuit;
  }

  async deleteCircuit(idCircuit) {
    if(!idCircuit) throw new NotFoundException('Resource no found');
    this.circuitModel.findByIdAndDelete(idCircuit);
  }

}
