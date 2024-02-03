export interface Team {}

export enum status {
  'active'= 'active',
  'inactive'= 'inactive',
  'deleted'= 'deleted',
  'rebranding'= 'rebranding'
}

export type StatisticTeam = {
  races: string;
  podium: string;
  vitory: string;
  polePosition: string;
  fastestLap: string; /* id piloto */
  championPilots: string;
  championContructor: string;
}