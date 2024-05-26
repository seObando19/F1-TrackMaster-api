export interface Car {
  name: string;
  team_id: string;
  season: string;
  pilots_use: string[];
  status: Status;
}

export enum Status {
  active   = 'active',
  inactive = 'inactive'
}