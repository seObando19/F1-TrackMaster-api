import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from 'config/configuration';
import { DatabaseModule } from '../config/database/database.module';

import { PilotModule } from './modules/pilot/pilot.module';
import { TeamModule } from "./modules/team/team.module";
import { GrandPrixModule } from './modules/grand-prix/grand-prix.module';

import { CarModule } from './modules/car/car.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      isGlobal: true,
      load: [configuration]
    }),
    DatabaseModule,
    PilotModule,
    TeamModule,
    GrandPrixModule,
    CarModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = +this.configService.get('PORT');
  }
}
