import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../store";
import { ActionTypes } from "../store/reducer";

const Container = styled.div`
  width: calc(100vw * 0.4);
  background-color: #323232;
  padding: 2rem 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Field = styled.div`
  width: calc(100% - 2rem);
  padding: 1rem;
  text-align: left;
`;

const Label = styled.div`
  color: white;
  font-size: 1rem;
  font-family: Poppins;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: -webkit-fill-available;
  padding: 0.5rem;
  background-color: #ffffff;
  display: block;
  border-radius: 3px;
  border: none;
  outline: none;
`;

const Button = styled.div`
  background-color: #0275d8;
  color: #ffffff;
  padding: 0.6rem 0;
  border-radius: 0.3rem;
  text-align: center;
  box-shadow: 2px;

  &:hover {
    box-shadow: 0;
  }

  &:active {
    color: #ffffff90;
    background-color: #0275d890;
  }
`;

const Calculator = () => {
  const [state, dispatch] = useContext(Context);
  const { capital, percentile, brokerage, trades } = state;
  return (
    <Container>
      <Field>
        <Label>
          Capital:{" ₹ "}
          {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
            capital || 0
          )}
        </Label>
        <Input
          value={capital}
          type="number"
          onChange={(el) =>
            dispatch({
              type: ActionTypes.capital,
              payload: { capital: Number(el.currentTarget.value) },
            })
          }
        />
      </Field>

      <Field>
        <Label>Earn / Trade:{` ${percentile} % `}</Label>
        <Input
          value={percentile}
          type="number"
          onChange={(el) =>
            dispatch({
              type: ActionTypes.percentile,
              payload: { percentile: Number(el.currentTarget.value) },
            })
          }
        />
      </Field>

      <Field>
        <Label>
          Brokerage / Trade:{" ₹ "}
          {Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
            brokerage || 0
          )}
        </Label>
        <Input
          value={brokerage}
          type="number"
          onChange={(el) =>
            dispatch({
              type: ActionTypes.brokerage,
              payload: { brokerage: Number(el.currentTarget.value) },
            })
          }
        />
      </Field>

      <Field>
        <Label>
          No of Trades:{" "}
          {` ${Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 3,
          }).format(trades || 0)} `}
        </Label>
        <Input
          value={trades}
          type="number"
          onChange={(el) =>
            dispatch({
              type: ActionTypes.trades,
              payload: { trades: Number(el.currentTarget.value) },
            })
          }
        />
      </Field>

      <Field>
        <Button onClick={() => dispatch({ type: ActionTypes.report })}>
          Generate Report
        </Button>
      </Field>
    </Container>
  );
};

export default Calculator;
