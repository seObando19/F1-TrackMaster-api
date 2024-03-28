import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CarService } from "./car.service";
import { Car } from "../../schemas/car.schema";
import { CarDTO } from './dto/car.dto';
import { configuration } from '../../../config/configuration';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Status } from './interfaces/car/car.interface';

@ApiTags('Cars')
@Controller(`api/${configuration().apiVersion}/cars`)
export class CarController {
  constructor(private carService: CarService) {}

  @Get()
  @ApiQuery({name: 'name', required: false})
  @ApiQuery({name: 'status', required: false})
  getCars(
    @Query('name') name: string,
    @Query('status') status: Status
  ):Promise<Car[]>{
    let query:any = {};

    if(name) query.name = name;
    query.status = status ? status : Status.active;
    return this.carService.getCars(query);
  }

  @Get(':id')
  getCarById(@Param() id: string):Promise<Car> {
    if(!id) throw new NotFoundException('Error in id..');
    return this.carService.getCarById(id);
  }

  @Post()
  createCar(@Body() payload: CarDTO[]):Promise<Car[]>{
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
