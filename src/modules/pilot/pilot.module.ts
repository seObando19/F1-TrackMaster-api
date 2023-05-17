import { Module } from '@nestjs/common';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';
import { Pilot, PilotSchema } from '../../schemas/pilot.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pilot.name, schema: PilotSchema }]),
  ],
  controllers: [PilotController],
  providers: [PilotService],
})
export class PilotModule {}
