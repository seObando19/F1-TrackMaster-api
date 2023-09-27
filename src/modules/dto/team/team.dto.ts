import { IsDateString, IsOptional, IsString } from "class-validator";

export enum statusTeams {
  'active'= 'active',
  'inactive'= 'inactive',
  'deleted'= 'deleted',
  'rebranding'= 'rebranding'
}

export class TeamDTO {
  id: string;
  name: string;
  headquarters: string;
  countryOrigin: string;
  status: statusTeams;
  startYear: Date;
}

export class CreateTeamDto {
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
}
