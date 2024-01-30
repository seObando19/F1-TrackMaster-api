import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateVehicleDTO } from '../dto/vehicle';
import { VehicleService } from './vehicle.service';


@Controller('api/v1/ehicle')
export class VehicleController {

  constructor(private vehicleService: VehicleService){}

  @Get()
  async getVehicle() {
    return this.vehicleService.getVehicles();
  }

  @Get(':id')
  async getVehicleById(@Param('id') id: string) {
    return this.vehicleService.getVehicleById(id);
  }

  @Post()
  async createVehicle(@Body() payload: CreateVehicleDTO) {
    return this.vehicleService.createVehicle(payload);
  }

  @Patch(':id')
  async updateVehicle(@Param('id') id: string, @Body() payload: any) {
    return this.updateVehicle(id, payload);
  }

  @Delete(':id')
  async deleteVehicle(@Param('id') id: string) {
    return this.vehicleService.deleteVehicle(id);
  }

}
