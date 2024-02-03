import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Car, CarSchema } from "../../schemas/car.schema";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Car.name, schema: CarSchema}])
  ],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
