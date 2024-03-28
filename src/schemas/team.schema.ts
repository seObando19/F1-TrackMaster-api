import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Status, StatisticTeam } from "../modules/team/interfaces/team/team.interface";

export type TeamDocument = HydratedDocument<Team>

@Schema()
export class Team {

  @Prop()
  name: string;

  @Prop()
  headquarters: string;

  @Prop()
  startYear: string;

  @Prop()
  debut: string;

  @Prop()
  pilots?: string[]

  @Prop({ type:Object })
  statisticTeam: StatisticTeam

  @Prop({ default: Status.active })
  status: Status;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
