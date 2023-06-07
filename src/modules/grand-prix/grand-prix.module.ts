import { Module } from '@nestjs/common';
import { GrandPrixController } from './grand-prix.controller';
import { GrandPrixService } from './grand-prix.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GrandPrix, GrandPrixSchema } from 'src/schemas/grand-prix.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GrandPrix.name, schema: GrandPrixSchema }])
  ],
  controllers: [GrandPrixController],
  providers: [GrandPrixService]
})
export class GrandPrixModule {}
