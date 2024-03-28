import { IsMongoId, IsObject, IsString } from "class-validator";
import { Status, Circuit } from "../interfaces/grand-prix/grand-prix.interface";
import { Team } from "src/schemas/team.schema";
import { Pilot } from "src/schemas/pilot.schema";
import { ApiProperty } from "@nestjs/swagger";


export class GrandPrixDTO {

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
