import { IsString, IsMongoId, IsArray, IsOptional } from "class-validator";
import { Team } from "../../../schemas/team.schema";
import { Status } from "../interfaces/car/car.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CarCreateDTO {

  @IsString()
  @ApiProperty()
  name: string;

  @IsMongoId()
  @ApiProperty()
  team_id: Team;

  @IsString()
  @ApiProperty()
  season: string;

  @IsString()
  @IsArray()
  @ApiProperty()
  pilots_use: string[];

  @IsString()
  @ApiProperty()
  status: Status
}

export class CarUpdateDTO {

  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  team_id: Team;

  @IsString()
  @ApiProperty()
  @IsOptional()
  season: string;

  @IsString()
  @IsArray()
  @ApiProperty()
  @IsOptional()
  pilots_use: string[];

  @IsString()
  @ApiProperty()
  @IsOptional()
  status: Status
}