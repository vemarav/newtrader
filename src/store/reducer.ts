import { round } from ".";
import { IReport, IState } from "./state";

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
  let oldCapital = capital,
    newCapital = capital,
    realisedPnL = 0;
  Array(trades)
    .fill(0)
    .forEach((_, index: number) => {
      newCapital += newCapital * (percentile / 100) - 50;
      realisedPnL = newCapital - oldCapital;
      reports.push({
        capital: round(oldCapital),
        brokerage,
        netRealisedPNL: round(realisedPnL + 50),
        realisedPNL: round(realisedPnL),
      });
      oldCapital = newCapital;
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
