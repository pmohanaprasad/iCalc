import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Resultt from "./Result";
import Number from "./Number";
import Operator from "./Operator";

function Main() {
  return (
    <div className="Main">
      <Router>
        <Switch>
          <Route path="/Result">
            <Resultt />
          </Route>
          <Route path="/Operator">
            <Operator />
          </Route>
          <Route path="/Number">
            <Number />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
