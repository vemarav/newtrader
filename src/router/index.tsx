import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
