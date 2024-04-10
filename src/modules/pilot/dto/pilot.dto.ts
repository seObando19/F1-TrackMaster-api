import { IsArray, IsDateString, IsMongoId, IsObject, IsOptional, IsString, IsInt } from 'class-validator';
import { Status, StatisticPilot  } from "../interfaces/pilot/pilot.interface";
import { Team } from '../../../schemas/team.schema';
import { ApiProperty } from '@nestjs/swagger';


export class PilotDTO {

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  lastname: string;

  @IsArray()
  @IsOptional()
  @ApiProperty({required: false})
  nickname?: string[];

  @IsDateString()
  @ApiProperty()
  birthday: Date;

  @IsMongoId()
  @IsOptional()
  @ApiProperty({required: false})
  teamCurrent_id?: Team;

  @IsString()
  @IsArray()
  @IsOptional()
  @ApiProperty({required:false})
  teamHistory?: string[]

  @IsString()
  @ApiProperty()
  nationality: string;

  @IsInt()
  @ApiProperty()
  numberUse: number;

  @IsObject()
  @IsOptional()
  @ApiProperty({required: false})
  statisticPilot?: StatisticPilot;

  @IsString()
  @IsOptional()
  @ApiProperty({required:false, enum:Status})
  status: Status;
}
