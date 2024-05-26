import { IsArray, IsDateString, IsObject, IsOptional, IsString, isDateString } from "class-validator";
import { StatisticTeam, Status } from "../interfaces/team/team.interface";
import { ApiProperty } from "@nestjs/swagger";

export class TeamCreateDTO {

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  headquarters: string;

  @IsString()
  @ApiProperty()
  startYear: string;

  @IsString()
  @ApiProperty()
  debut: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({required:false})
  pilots?: string[];

  @IsObject()
  @ApiProperty()
  statisticTeam: StatisticTeam;

  @ApiProperty()
  status: Status;
}

export class TeamUpdateDTO {

  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsString()
  @ApiProperty()
  @IsOptional()
  headquarters: string;

  /* @IsString()
  @ApiProperty()
  startYear: string; */

  /* @IsString()
  @ApiProperty()
  debut: string; */

  @IsArray()
  @IsOptional()
  @ApiProperty({required:false})
  pilots?: string[];

  @IsObject()
  @ApiProperty()
  @IsOptional()
  statisticTeam: StatisticTeam;

  @ApiProperty()
  @IsOptional()
  status: Status;
}