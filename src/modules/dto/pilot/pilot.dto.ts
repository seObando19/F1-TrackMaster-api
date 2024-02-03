import { IsArray, IsDate, IsDateString, IsMongoId, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { status, StatisticPilot  } from "../../pilot/interfaces/pilot/pilot.interface";
import { Team } from 'src/schemas/team.schema';

export class PilotDTO {

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsArray()
  @IsOptional()
  nickname: string[];

  @IsString()
  @IsDateString()
  birthday: string;

  @IsMongoId()
  @IsOptional()
  teamCurrent_id: Team;

  @IsString()
  @IsArray()
  @IsOptional()
  teamHistory: string[]

  @IsString()
  nationality: string;

  @IsString()
  numberUse: string;

  @IsObject()
  @IsOptional()
  statisticPilot: StatisticPilot;

  @IsString()
  status: status;

}

/* export class CreatePilotDto {
  @IsString()
  name;

  @IsString()
  lastname;

  @IsArray()
  nickname;

  @IsString()
  nationality;

  @IsNumber()
  age;

  @IsMongoId()
  currentTeam;

  @IsString()
  @IsOptional()
  status?;

  @IsObject()
  @IsOptional()
  title?;
}

export class updatePilot {
  @IsString()
  name;

  @IsString()
  lastname;

  @IsArray()
  nickname;

  @IsMongoId()
  currentTeam;

  @IsString()
  @IsOptional()
  status?;

  @IsObject()
  @IsOptional()
  title?;
} */
