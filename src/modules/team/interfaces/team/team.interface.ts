export interface Team {
  name: string;
  headquarters: string;
  startYear: string;
  debut: string;
  pilots?: string[];
  statisticTeam: StatisticTeam;
  status: status;
}

export enum status {
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