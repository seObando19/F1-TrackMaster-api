import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { User, UserSchema } from '../../schemas/user.schema';
import { configuration } from '../../../config/configuration';
import { DatabaseModule } from '../../../config/database/database.module';
import { ConfigModule } from '@nestjs/config';


describe('UserService', () => {
  let userService: UserService;

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
      providers: [UserService],
    }).compile();

      userService = module.get<UserService>(UserService);
    });

    it('should be defined', () => {
      expect(userService).toBeDefined();
    });
});
