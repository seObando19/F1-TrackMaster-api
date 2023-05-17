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
}

export class CreatePilotDto {
  @IsString()
  name;

  @IsString()
  lastname;

  @IsArray()
  nickname;

  @IsDate()
  birthday;
}

export class GetPilotDto {
  @IsString()
  name;

  @IsString()
  lastname;
}
