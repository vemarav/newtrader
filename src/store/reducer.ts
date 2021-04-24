import { IReport, IState } from "./state";

const round = (x: number): number => Math.round(x * 100) / 100;

export interface IAction {
  type: string;
  payload?: any;
}

export const ActionTypes = {
  capital: "capital",
  percentile: "percentile",
  brokerage: "brokerage",
  trades: "trades",
  report: "report",
};

const generateReport = (state: IState): IState => {
  const { capital, brokerage, percentile, trades } = state;
  const reports: Array<IReport> = [];
  let realisedPnL = 0,
    netRealisedPnL = 0;
  Array(trades)
    .fill(0)
    .forEach((_, index: number) => {
      realisedPnL += capital * (percentile / 100) - brokerage;
      netRealisedPnL += capital * (percentile / 100);
      reports.push({
        capital: index > 0 ? realisedPnL + capital : capital,
        brokerage,
        netRealisedPNL: round(netRealisedPnL),
        realisedPNL: round(realisedPnL),
      });
    });
  return {
    ...state,
    reports,
  };
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.capital:
      const { capital } = action.payload;
      return {
        ...state,
        capital,
      };
    case ActionTypes.percentile:
      const { percentile } = action.payload;
      return {
        ...state,
        percentile,
      };
    case ActionTypes.brokerage:
      const { brokerage } = action.payload;
      return {
        ...state,
        brokerage,
      };
    case ActionTypes.trades:
      const { trades } = action.payload;
      return {
        ...state,
        trades,
      };
    case ActionTypes.report:
      return generateReport(state);
    default:
      throw new TypeError(action.type);
  }
};
