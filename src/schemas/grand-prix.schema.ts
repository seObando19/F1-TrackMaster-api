import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Circuit } from "./circuit.schema";

export type GrandPrixDocument = HydratedDocument<GrandPrix>

@Schema({ timestamps: true })
export class GrandPrix {
  @Prop()
  name: string;

  @Prop()
  country: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Circuit.name })
  circuit_id: Circuit;

  @Prop()
  yearsSeason: number[];

  @Prop()
  yearStart: Date;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const GrandPrixSchema = SchemaFactory.createForClass(GrandPrix);
