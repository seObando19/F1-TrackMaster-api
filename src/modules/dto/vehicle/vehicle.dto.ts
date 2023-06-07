import { IsDateString, IsMongoId, IsString } from "class-validator";



export class vehicleDTO {
  id: string;
  name: string;
  team_id: string;
  yearSeason: string;
  pilot_id: string;
}

export class CreateVehicleDTO {
  @IsString()
  name;

  @IsMongoId()
  team_id

  @IsDateString()
  yearSeason;

  @IsMongoId()
  pilot_id;
}