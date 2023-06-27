import { IsArray, IsDateString, IsMongoId, IsNumber, IsString } from "class-validator";
import { Circuit } from "src/schemas/circuit.schema";


export class GrandPrixDTO {
  name: string;
  country: string;
  circuit_id: Circuit;
  yearsSeason: number[];
  yearStart: Date;
}

export class createGrandPrix {
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
}
