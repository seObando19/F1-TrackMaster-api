import { IsArray, IsDate, IsDateString, IsMongoId, IsObject, IsOptional, IsString } from 'class-validator';
import { pilotStatus, titlePilot } from 'src/interfaces/pilot';
import { Team } from 'src/schemas/team.schema';

export class PilotDTO {
  name: string;
  lastname: string;
  nickname: string[];
  nationality: string;
  currentTeam: Team;
  status: pilotStatus;
  title?: titlePilot;
  birthday: Date;
}

export class CreatePilotDto {
  @IsString()
  name;

  @IsString()
  lastname;

  @IsArray()
  nickname;

  @IsString()
  nationality;

  @IsMongoId()
  currentTeam;

  @IsString()
  @IsOptional()
  status?;

  @IsObject()
  @IsOptional()
  title?;

  @IsDateString()
  birthday;
}

export class GetPilotDto {
  name?: string;
  lastname?: string;
  nickname?: string[];
}
