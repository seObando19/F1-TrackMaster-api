export interface Pilot {
  name: string;
  lastname: string;
  nickname?: string[];
  birthday: string;
  teamCurrent_id?: string;
  teamHistory?: string[]
  nationality: string;
  numberUse: string;
  statisticPilot?: StatisticPilot;
  status: Status;
}


export enum Status {
  active = "active",
  deleted = "deleted",
  disabled = "disabled",
  retired = "retired"
}

export type StatisticPilot =  {
  victories: string;
  podium: string;
  poles: string;
  titles: string;
}