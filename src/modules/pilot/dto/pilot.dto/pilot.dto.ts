import { IsArray, IsDate, IsOptional, IsString } from 'class-validator';

export class PilotDto {
  @IsString()
  name;

  @IsString()
  lastname;

  @IsArray()
  nickname;

  @IsDate()
  birthday;

  @IsOptional()
  team_id;
}
