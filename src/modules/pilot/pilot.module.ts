import { Module } from '@nestjs/common';
import { PilotController } from './pilot.controller';
import { PilotService } from './pilot.service';
import { Pilot, PilotSchema } from '../../schemas/pilot.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamModule } from '../team/team.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pilot.name, schema: PilotSchema }]),
    TeamModule
  ],
  controllers: [PilotController],
  providers: [PilotService],
})
export class PilotModule {}
