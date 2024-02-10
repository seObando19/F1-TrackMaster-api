import { IsArray, IsDateString, IsObject, IsOptional, IsString, isDateString } from "class-validator";
import { StatisticTeam, status } from "../interfaces/team/team.interface";

export class TeamDTO {

  @IsString()
  name: string;

  @IsString()
  headquarters: string;

  @IsString()
  startYear: string;

  @IsString()
  debut: string;

  @IsArray()
  @IsOptional()
  pilots: string[];

  @IsObject()
  statisticTeam: StatisticTeam;

  status: status;
}
