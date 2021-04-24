import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";
import { IReport } from "../store/state";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Reports = () => {
  const [state] = useContext(Context);
  return (
    <Container>
      <table id={"reports"}>
        <thead>
          <tr>
            <th>Day</th>
            <th>Capital</th>
            <th>Brokerage</th>
            <th>Realised {"P&L"}</th>
            <th>Net Realised {"P&L"}</th>
          </tr>
        </thead>
        <tbody>
          {state.reports.map((row: IReport, index: number) => (
            <tr key={`${row.netRealisedPNL}`}>
              <td>{index + 1}</td>
              <td>{row.capital}</td>
              <td>{row.brokerage}</td>
              <td>{row.realisedPNL}</td>
              <td>{row.netRealisedPNL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Reports;
