import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { pilotStatus, titlePilot } from '../interfaces/pilot';
import { Team } from './team.schema';

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
  age: number;

  @Prop()
  nationality: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Team.name })
  currentTeam: Team;

  @Prop({ default: pilotStatus.active, required: false })
  status: pilotStatus;

  @Prop()
  title?: titlePilot;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PilotSchema = SchemaFactory.createForClass(Pilot);
