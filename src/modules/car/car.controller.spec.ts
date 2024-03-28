import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Car, CarSchema } from '../../schemas/car.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';

describe('CarController', () => {
  let controller: CarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          isGlobal: true,
          load: [configuration]
        }),
        DatabaseModule,
        MongooseModule.forFeature([{ name: Car.name, schema: CarSchema }]),
      ],
      controllers: [CarController],
      providers: [CarService]
    }).compile();

    controller = module.get<CarController>(CarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
