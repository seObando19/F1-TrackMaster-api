import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Pilot } from "./pilot.schema";
import { Team } from "./team.schema";

export type CircuitDocument = HydratedDocument<Circuit>

@Schema({ timestamps: true })
export class Circuit {
  @Prop()
  name: string;

  @Prop()
  lenght: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Pilot.name })
  greatestVictorPilot_id: Pilot;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Team.name })
  greatestVictorBuilder_id: Team;

  @Prop()
  totalDistance: number;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const CircuitSchema = SchemaFactory.createForClass(Circuit);
