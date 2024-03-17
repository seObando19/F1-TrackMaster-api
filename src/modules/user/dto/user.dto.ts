import { IsArray, IsBase32, IsDate, IsEmail, IsJWT, IsMongoId, IsObject, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { ConfigUser, Roles, numberPhone } from "../interfaces/user.interface";
import { Types } from "mongoose";

export class UserDTO {

  @IsMongoId()
  _id: Types.ObjectId;

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  @IsString()
  email: string;

  @IsArray()
  @IsString()
  roles: Roles[]

  /* @IsJWT()
  @IsOptional()
  token; */

  @IsObject()
  config: ConfigUser;

  /* @IsBase32()
  avatar: File; */

  @IsPhoneNumber()
  numberPhone: numberPhone;

  @IsDate()
  @IsOptional()
  lastAccess: Date;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}