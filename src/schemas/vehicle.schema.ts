import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Team } from "./team.schema";
import { Pilot } from "./pilot.schema";

export type VehicleDocument = HydratedDocument<Vehicle>

@Schema({ timestamps: true })
export class Vehicle {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Team.name })
  team_id: Team;

  @Prop({ type: mongoose.Types.ObjectId, ref: Pilot.name })
  pilot_id: Pilot;

  @Prop()
  yearSeason: Date;

  @Prop()
  createdAt?: Date;
  
  @Prop()
  updatedAt?: Date;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);
