import { Pilot } from "src/schemas/pilot.schema";
import { Team } from "src/schemas/team.schema";

export class CircuitDTO {
  name: string;
  lenght: number;
  greatestVictorPilot_id: Pilot;
  greatestVictorBuilder_id: Team;
  totalDistance: number;
}