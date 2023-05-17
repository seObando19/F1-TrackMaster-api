import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PilotDocument = HydratedDocument<Pilot>;

@Schema({ timestamps: true })
export class Pilot {
  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop([String])
  nickname?: string[];

  @Prop()
  nationality: string;

  @Prop()
  birthday: Date;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PilotSchema = SchemaFactory.createForClass(Pilot);
