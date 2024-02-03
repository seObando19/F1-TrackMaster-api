import { IsArray, IsDateString, IsObject, IsOptional, IsString, isDateString } from "class-validator";
import { StatisticTeam, status } from "../../team/interfaces/team/team.interface";

export class TeamDTO {

  @IsString()
  name: string;

  @IsString()
  headquarters: string;

  @IsDateString()
  startYear: Date;

  @IsDateString()
  debut: Date;

  @IsArray()
  pilots: string[];

  @IsObject()
  statisticTeam: StatisticTeam;

  status: status;
}

/* export class CreateTeamDto {
  @IsString()
  name;

  @IsString()
  headquarters;

  @IsString()
  countryOrigin;

  @IsString()
  @IsOptional()
  status;

  @IsDateString()
  startYear;
}

export class UpdateTeamDTO {
  @IsString()
  name;

  @IsString()
  headquarters;

  @IsString()
  @IsOptional()
  status;
} */
