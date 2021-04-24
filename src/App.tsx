import { createGlobalStyle } from "styled-components";
import Router from "./router/index";
import Store from "./store";

const GlobalStyle = createGlobalStyle`
  body, * {
    font-family: Roboto;
  }
`;

function App() {
  return (
    <Store>
      <GlobalStyle />
      <Router />
    </Store>
  );
}

export default App;
