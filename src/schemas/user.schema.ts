import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Roles, ConfigUser, numberPhone } from '../modules/user/interfaces/user.interface';

export type UserDocument = HydratedDocument<User>

@Schema({timestamps: true})
export class User {
  @Prop({ default: () => new Types.ObjectId() })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  lastname: string;

  @Prop({unique: true})
  username: string;

  @Prop()
  password: string;

  @Prop()
  email: string;

  @Prop({ default: Roles['user-register'] })
  roles: Roles[];

  /* @Prop()
  token: string; */

  @Prop({ type: Object })
  config: ConfigUser;

  /* @Prop()
  avatar: File; */

  @Prop({ type: Object })
  numberPhone: numberPhone;

  @Prop()
  lastAccess: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
