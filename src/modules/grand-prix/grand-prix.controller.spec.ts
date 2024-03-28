import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { GrandPrixController } from './grand-prix.controller';
import { GrandPrixService } from './grand-prix.service';
import { GrandPrix, GrandPrixSchema } from '../../schemas/grand-prix.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';

describe('GrandPrixController', () => {
  let controller: GrandPrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          isGlobal: true,
          load: [configuration]
        }),
        DatabaseModule,
        MongooseModule.forFeature([{ name: GrandPrix.name, schema: GrandPrixSchema }]),
      ],
      controllers: [GrandPrixController],
      providers: [GrandPrixService]
    }).compile();

    controller = module.get<GrandPrixController>(GrandPrixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
