import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PilotModule } from './modules/pilot/pilot.module';
import { TeamModule } from "./modules/team/team.module";
import { VehicleModule } from './modules/vehicle/vehicle.module';
import { GrandPrixModule } from './modules/grand-prix/grand-prix.module';
import { CircuitModule } from './modules/circuit/circuit.module';

import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    PilotModule,
    TeamModule,
    VehicleModule,
    GrandPrixModule,
    CircuitModule,
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
