import { IsArray, IsDateString, IsMongoId, IsObject, IsOptional, IsString, IsInt } from 'class-validator';
import { Status, StatisticPilot  } from "../interfaces/pilot/pilot.interface";
import { Team } from '../../../schemas/team.schema';

export class PilotDTO {

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsArray()
  @IsOptional()
  nickname: string[];

  @IsDateString()
  birthday: Date;

  @IsMongoId()
  @IsOptional()
  teamCurrent_id: Team;

  @IsString()
  @IsArray()
  @IsOptional()
  teamHistory: string[]

  @IsString()
  nationality: string;

  @IsInt()
  numberUse: number;

  @IsObject()
  @IsOptional()
  statisticPilot: StatisticPilot;

  @IsString()
  @IsOptional()
  status: Status;
}
