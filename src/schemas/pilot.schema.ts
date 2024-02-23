import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Mongoose } from 'mongoose';
import { Status, StatisticPilot } from "../modules/pilot/interfaces/pilot/pilot.interface";
import { Team } from './team.schema';

export type PilotDocument = HydratedDocument<Pilot>;

@Schema()
export class Pilot {
  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop([String])
  nickname?: string[];

  @Prop()
  birthday: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Team.name })
  teamCurrent_id?: Team;

  @Prop()
  teamHistory?: string[]

  @Prop()
  nationality: string;

  @Prop({ unique: true })
  numberUse: number;

  @Prop({ type: Object})
  statisticPilot?: StatisticPilot;

  @Prop({ default: Status.active, required: false })
  status: Status;
}

export const PilotSchema = SchemaFactory.createForClass(Pilot);
