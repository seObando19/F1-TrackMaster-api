import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Team } from "./team.schema";
import { Status } from "../modules/car/interfaces/car/car.interface";

export type CarDocument = HydratedDocument<Car>

Schema()
export class Car {
  @Prop()
  name: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: Team.name })
  team_id: Team;

  @Prop()
  season: string;

  @Prop()
  pilots_use: string[] /* array pilots use car */

  @Prop({ default: Status.active })
  status: Status;
}

export const CarSchema = SchemaFactory.createForClass(Car);
