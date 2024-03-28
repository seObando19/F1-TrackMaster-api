import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { PilotService } from './pilot.service';
import { Pilot, PilotSchema } from '../../schemas/pilot.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { TeamService } from '../team/team.service';
import { Team, TeamSchema } from '../../schemas/team.schema';

describe('PilotService', () => {
  let pilotService: PilotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          isGlobal: true,
          load: [configuration]
        }),
        DatabaseModule,
        MongooseModule.forFeature([{ name: Pilot.name, schema: PilotSchema }]),
        MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
      ],
      providers: [PilotService, TeamService],
    }).compile();

    pilotService = module.get<PilotService>(PilotService);
  });

  it('should be defined', () => {
    expect(pilotService).toBeDefined();
  });
});
