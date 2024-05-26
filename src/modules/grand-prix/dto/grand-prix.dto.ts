import { IsMongoId, IsObject, IsString, IsOptional } from "class-validator";
import { Status, Circuit } from "../interfaces/grand-prix/grand-prix.interface";
import { Team } from "../../../schemas/team.schema";
import { Pilot } from "../../../schemas/pilot.schema";
import { ApiProperty } from "@nestjs/swagger";


export class GrandPrixCreateDTO {

  @IsString()
  @ApiProperty()
  name: string;

  @IsString()
  @ApiProperty()
  firstEdtion: string;

  @IsString()
  @ApiProperty()
  headquarters: string;

  @IsMongoId()
  @ApiProperty()
  greaterWinnerConstructions: Team;

  @IsMongoId()
  @ApiProperty()
  greaterWinnerPilots: Pilot;

  @IsObject()
  @ApiProperty()
  circuit: Circuit;

  @IsString()
  @ApiProperty()
  status: Status;
}

export class GrandPrixUpdateDTO {

  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  /* @IsString()
  @ApiProperty()
  firstEdtion: string; */

  /* @IsString()
  @ApiProperty()
  headquarters: string; */

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  greaterWinnerConstructions: Team;

  @IsMongoId()
  @ApiProperty()
  @IsOptional()
  greaterWinnerPilots: Pilot;

  @IsObject()
  @ApiProperty()
  @IsOptional()
  circuit: Circuit;

  @IsString()
  @ApiProperty()
  @IsOptional()
  status: Status;
}
