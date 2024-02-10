import { IsMongoId, IsObject, IsString } from "class-validator";
import { Status, Circuit } from "../interfaces/grand-prix/grand-prix.interface";
import { Team } from "src/schemas/team.schema";
import { Pilot } from "src/schemas/pilot.schema";


export class GrandPrixDTO {

  @IsString()
  name: string;

  @IsString()
  firstEdtion: string;

  @IsString()
  headquarters: string;

  @IsMongoId()
  greaterWinnerConstructions: Team;

  @IsMongoId()
  greaterWinnerPilots: Pilot;

  @IsObject()
  circuit: Circuit;

  @IsString()
  status: Status;
}
