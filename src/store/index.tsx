import React, { useReducer } from "react";
import { IAction, reducer } from "./reducer";
import { initState, IState } from "./state";

export const Context = React.createContext<[IState, React.Dispatch<IAction>]>([
  initState,
  (action: IAction) => initState,
]);

const Store = (props: { children: Array<JSX.Element> }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { children } = props;
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
