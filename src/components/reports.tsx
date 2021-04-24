import { useContext } from "react";
import styled from "styled-components";
import { Context, round } from "../store";
import { IReport } from "../store/state";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem;
  font-size: 1rem;
  color: #767676;
`;

const Reports = () => {
  const [state] = useContext(Context);
  const { reports } = state;
  const brokerage = () =>
    reports
      .map((report: IReport) => report.brokerage)
      .reduce((pX, cX) => pX + cX);
  const realised = () =>
    reports
      .map((report: IReport) => report.realisedPNL)
      .reduce((pX, cX) => pX + cX);
  const netRealised = () =>
    reports
      .map((report: IReport) => report.netRealisedPNL)
      .reduce((pX, cX) => pX + cX);

  return (
    <Container>
      <table id={"reports"}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Capital</th>
            <th>Brokerage</th>
            <th>Net Realised {"P&L"}</th>
            <th>Realised {"P&L"}</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((row: IReport, index: number) => (
            <tr key={`${row.netRealisedPNL}`}>
              <td>{index + 1}</td>
              <td>{row.capital}</td>
              <td>{row.brokerage}</td>
              <td>{row.netRealisedPNL}</td>
              <td>{row.realisedPNL}</td>
            </tr>
          ))}
        </tbody>
        {reports.length > 0 ? (
          <thead>
            <tr>
              <th></th>
              <th>Total</th>
              <th>{round(brokerage())}</th>
              <th>{round(netRealised())}</th>
              <th>{round(realised())}</th>
            </tr>
          </thead>
        ) : null}
      </table>
      {reports.length > 0 ? null : (
        <EmptyMessage>Click "Generate Report" to see results</EmptyMessage>
      )}
    </Container>
  );
};

export default Reports;
