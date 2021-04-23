import { createGlobalStyle } from "styled-components";
import Router from "./router/index";

const GlobalStyle = createGlobalStyle`
body, * {
  font-family: Roboto;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
