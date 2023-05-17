import { Document, Model, Schema, SchemaType, model } from 'mongoose';

export interface Pilot {
  name: string;
  lastname: string;
  nickname?: string[];
  birthday: Date;
}

const pilotSchema = new Schema<Pilot>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    nickname: String,
    birthday: { type: Date },
  },
  { timestamps: true, versionKey: false },
);

export interface PilotDocument extends Pilot, Document {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PilotModel extends Model<PilotDocument> {}
model<PilotDocument, PilotModel>('pilot', pilotSchema);
