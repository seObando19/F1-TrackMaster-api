export interface GrandPrix {
  name: string;
  firstEdtion: string;
  headquarters: string;
  greaterWinnerConstructions: string;
  greaterWinnerPilots: string;
  circuit: Circuit;
  status: Status;
}


export enum Status {
  'active'= 'active',
  'inactive' = 'inactive',
  'canceled' = 'canceled',
  'contract-end' = 'contract-end'
}

export interface Circuit {
  length: string;
  totalDistance: string;
  roads: number;
}
