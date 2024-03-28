import { IsArray, IsBase32, IsDate, IsEmail, IsJWT, IsMongoId, IsObject, IsOptional, IsPhoneNumber, IsString } from "class-validator";
import { ConfigUser, Roles, numberPhone } from "../interfaces/user.interface";
import { Types } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export class UserDTO {

  @IsMongoId()
  _id: Types.ObjectId;

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  lastname: string;

  @IsString()
  @ApiProperty()
  username: string;

  @IsString()
  @ApiProperty()
  password: string;

  @IsEmail()
  @IsString()
  @ApiProperty()
  email: string;

  @IsArray()
  @IsString()
  @ApiProperty()
  roles: Roles[]

  /* @IsJWT()
  @IsOptional()
  token; */

  @IsObject()
  @ApiProperty()
  config: ConfigUser;

  /* @IsBase32()
  avatar: File; */

  @IsPhoneNumber()
  @ApiProperty()
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