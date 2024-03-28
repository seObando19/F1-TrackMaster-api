import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamService } from './team.service';
import { Team, TeamSchema } from '../../schemas/team.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';

describe('TeamService', () => {
  let teamService: TeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          isGlobal: true,
          load: [configuration]
        }),
        DatabaseModule,
        MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
      ],
      providers: [TeamService],
    }).compile();

    teamService = module.get<TeamService>(TeamService);
  });

  it('should be defined', () => {
    expect(teamService).toBeDefined();
  });
});
