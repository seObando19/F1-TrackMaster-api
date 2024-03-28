export interface Team {
  name: string;
  headquarters: string;
  startYear: string;
  debut: string;
  pilots?: string[];
  statisticTeam: StatisticTeam;
  status: Status;
}

export enum Status {
  'active'= 'active',
  'inactive'= 'inactive',
  'deleted'= 'deleted',
  'rebranding'= 'rebranding'
}

export type StatisticTeam = {
  races: string;
  podium: string;
  victory: string;
  polePosition: string;
  fastestLap: string; /* id piloto */
  championPilots: string;
  championContructor: string;
}