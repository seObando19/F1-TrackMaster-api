import { IsString, IsMongoId, IsArray } from "class-validator";
import { Team } from "src/schemas/team.schema";
import { Status } from "../interfaces/car/car.interface";

export class CarDTO {

  @IsString()
  name: string;

  @IsMongoId()
  team_id: Team;

  @IsString()
  season: string;

  @IsString()
  @IsArray()
  pilots_use: string[];

  @IsString()
  status: Status
}