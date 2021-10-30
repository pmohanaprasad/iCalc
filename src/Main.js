import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import App from './App'
import Resultt from './Result'
import Number from './Number'
import Operator from './operator'

function Main() {
  return(
    <div className="Main">
      <Router>
        <Switch>
          <Route path="/Result"><Resultt /></Route>
          <Route path="/operator"><Operator /></Route>
          <Route path="/Number"><Number /></Route>
          <Route path="/"><App /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;
