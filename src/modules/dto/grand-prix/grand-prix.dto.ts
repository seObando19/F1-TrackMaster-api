import { IsMongoId, IsObject, IsString } from "class-validator";
import { Status, Circuit } from "../../grand-prix/interfaces/grand-prix/grand-prix.interface";


export class GrandPrixDTO {

  @IsString()
  name: string;

  @IsString()
  firstEdtion: string;

  @IsString()
  headquarters: string;

  @IsMongoId()
  greaterWinnerConstructions: string;

  @IsMongoId()
  greaterWinnerPilots: string;

  @IsObject()
  circuit: Circuit;

  @IsString()
  status: Status;
}

/* export class createGrandPrix {
  @IsString()
  name;

  @IsString()
  country;

  @IsMongoId()
  circuit_id;

  @IsNumber()
  @IsArray()
  yearsSeason;

  @IsDateString()
  yearStart;
} */
