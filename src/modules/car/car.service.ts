import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Car } from '../../schemas/car.schema';
import { Status } from "./interfaces/car/car.interface";

@Injectable()
export class CarService {

  constructor(@InjectModel(Car.name) private carModel: Model<Car>) {}

  async getCars(query?): Promise<Car[]>{
    const cars = await this.carModel.find(query);
    if(!cars) throw new NotFoundException('Not found Cars');
    return cars;
  }

  async getCarById(id:string): Promise<Car>{
    const car = await this.carModel.findById(id);
    if(!car) throw new NotFoundException('Resource no found');
    return car;
  }

  async createCar(payload: Car[]): Promise<Car[]>{
    let cars: Car[] = [];
    for (let index = 0; index < payload.length; index++) {
      const element = payload[index];
      const newCar = new this.carModel(element);
      cars.push(await newCar.save());
    }
    return cars;
  }

  async updateCar(id: string, payload: Car): Promise<Car>{
    if(!id || !payload) throw new NotFoundException('Resource no found');
    const carUpdated = await this.carModel.findByIdAndUpdate(id, payload);
    return carUpdated;
  }

  async deleteCar(id: string): Promise<void>{
    const card = await this.carModel.findById(id);
    if(!card) throw new NotFoundException('Resource no found');
    card.status = Status.inactive;
    card.save();
  }
}
