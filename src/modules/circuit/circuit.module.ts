import { Module } from '@nestjs/common';
import { CircuitController } from './circuit.controller';
import { CircuitService } from './circuit.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Circuit, CircuitSchema } from 'src/schemas/circuit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Circuit.name, schema: CircuitSchema }])
  ],
  controllers: [CircuitController],
  providers: [CircuitService]
})
export class CircuitModule {}
