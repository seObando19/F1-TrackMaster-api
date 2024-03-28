import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { CarService } from './car.service';
import { Car, CarSchema } from '../../schemas/car.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';

describe('CarService', () => {
  let carService: CarService;

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
      providers: [CarService],
    }).compile();

    carService = module.get<CarService>(CarService);
  });

  it('should be defined', () => {
    expect(carService).toBeDefined();
  });
});
