import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle } from 'src/schemas/vehicle.schema';
import { CreateVehicleDTO } from '../dto/vehicle';

@Injectable()
export class VehicleService {

  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<Vehicle>){}

  async getVehicles() {
    const vehicles = this.vehicleModel.find();
    return vehicles;
  }

  async getVehicleById(id: string) {
    const vehicle = this.vehicleModel.findById(id);
    if(!vehicle) throw new NotFoundException('Resource no found');
    return vehicle;
  }

  async createVehicle(payload: CreateVehicleDTO) {
    const vehicle = new this.vehicleModel(payload);
    return vehicle.save();
  }

  async updateVehicle(id: string, payload: any) {
    if(!id || !payload) throw new NotFoundException('Resource no found');
    const vehicle = await this.vehicleModel.findByIdAndUpdate(id, payload);
    return vehicle;
  }

  async deleteVehicle(id: string) {
    if(!id) throw new NotFoundException('Resource no found');
    this.vehicleModel.findByIdAndDelete(id);
  }

}
