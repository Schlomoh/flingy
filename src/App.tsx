import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Reply } from "./pages/Reply";
import { Starter } from "./pages/Starter";

import { OL } from "./components/GlobalComponents";

import pattern from "./assets/email-pattern.png";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/starter">
            <OL bg={pattern} el={<Starter />} />
          </Route>
          <Route path="/reply">
            <OL el={<Reply />} />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
