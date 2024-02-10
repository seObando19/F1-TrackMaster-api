import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CarService } from "./car.service";
import { Car } from "../../schemas/car.schema";
import { CarDTO } from './dto/car.dto';
import * as dotenv from "dotenv";

dotenv.config();
const ENVIROMENT_DATA = process.env;

@Controller(`api/${ENVIROMENT_DATA.API_VERSION}/cars`)
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  getCars():Promise<Car[]>{
    return this.carService.getCars();
  }

  @Get(':id')
  getCarById(@Param() id: string):Promise<Car> {
    if(!id) throw new NotFoundException('Error in id..');
    return this.carService.getCarById(id);
  }

  @Post()
  createCar(@Body() payload: CarDTO):Promise<Car>{
    return this.carService.createCar(payload);
  }

  @Patch(':id')
  updateCar(@Param() id: string, @Body() payload: CarDTO):Promise<Car>{
    return this.carService.updateCar(id, payload);
  }

  @Delete('id')
  deleteCar(@Param() id: string):Promise<void>{
    return this.carService.deleteCar(id);
  }
}
