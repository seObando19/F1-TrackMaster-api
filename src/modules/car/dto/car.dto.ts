import { IsString, IsMongoId, IsArray } from "class-validator";
import { Team } from "../../../schemas/team.schema";
import { Status } from "../interfaces/car/car.interface";
import { ApiProperty } from "@nestjs/swagger";

export class CarDTO {

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