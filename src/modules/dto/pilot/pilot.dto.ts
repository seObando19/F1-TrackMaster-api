import { IsArray, IsDate, IsDateString, IsMongoId, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { pilotStatus, titlePilot } from 'src/interfaces/pilot';
import { Team } from 'src/schemas/team.schema';

export class PilotDTO {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsArray()
  nickname: string[];

  @IsString()
  nationality: string;

  @IsNumber()
  age: number;

  @IsMongoId()
  currentTeam: Team;

  @IsString()
  status: pilotStatus;

  @IsObject()
  @IsOptional()
  title?: titlePilot;
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
}
