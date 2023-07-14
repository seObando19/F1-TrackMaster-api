import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CircuitService } from './circuit.service';

@Controller('circuit')
export class CircuitController {

  constructor(private circuitService: CircuitService){}

  @Get()
  async getllCircuits(){
    return this.circuitService.getAllCircuits();
  }

  @Get(':id')
  async getCircuitById(@Param('id') id: string){
    return this.circuitService.getCircuitById(id);
  }

  @Post()
  async createCircuit(@Body() payload: any){
    return this.circuitService.createCircuit(payload);
  }

  @Put(':id')
  async updateCircuit(@Param('id') id: string, @Body() payload: any) {
    return this.circuitService.updateCircuit(id, payload);
  }

  @Delete(':id')
  async deleteCircuit(@Param(':id') id: string) {
    return this.circuitService.deleteCircuit(id);
  }

}
