import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Team } from "./team.schema";
import { Pilot } from "./pilot.schema";
import { Circuit, Status } from "../modules/grand-prix/interfaces/grand-prix/grand-prix.interface";

export type GrandPrixDocument = HydratedDocument<GrandPrix>

@Schema()
export class GrandPrix {
  @Prop()
  name: string;

  @Prop()
  firstEdtion: string;

  @Prop()
  headquarters: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: Team.name })
  greaterWinnerConstructions: Team;

  @Prop({ type: mongoose.Types.ObjectId, ref: Pilot.name })
  greaterWinnerPilots: Pilot;

  @Prop({ type: Object })
  circuit: Circuit

  @Prop({ default: Status.active })
  status: Status
}

export const GrandPrixSchema = SchemaFactory.createForClass(GrandPrix);
