import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { status, StatisticTeam } from "../modules/team/interfaces/team/team.interface";

export type TeamDocument = HydratedDocument<Team>

@Schema()
export class Team {

  @Prop()
  name: string;

  @Prop()
  headquarters: string;

  @Prop()
  startYear: Date;

  @Prop()
  debut: Date;

  @Prop()
  pilots: string[]

  @Prop({ type:Object })
  statisticTeam: StatisticTeam

  @Prop({ default: status.active })
  status: status;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
