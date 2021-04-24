export interface IReport {
  capital: number;
  brokerage: number;
  realisedPNL: number;
  netRealisedPNL: number;
}

export interface IState {
  capital: number;
  percentile: number;
  brokerage: number;
  trades: number;
  reports: Array<IReport>;
}

export const initState: IState = {
  capital: 1000,
  percentile: 10,
  brokerage: 50,
  trades: 21,
  reports: [],
};
