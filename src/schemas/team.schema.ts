import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { statusTeams } from 'src/modules/dto/team';

export type TeamDocument = HydratedDocument<Team>

@Schema({ timestamps: true })
export class Team {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  headquarters: string;

  @Prop()
  countryOrigin: string;

  @Prop({ default: statusTeams.active })
  status: statusTeams;

  @Prop()
  startYear: Date;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);
