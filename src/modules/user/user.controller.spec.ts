import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User, UserSchema } from '../../schemas/user.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';


describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
          isGlobal: true,
          load: [configuration]
        }),
        DatabaseModule,
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
      ],
      controllers: [UserController],
      providers: [UserService]
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
