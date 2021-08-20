import { Home } from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Reply } from "./pages/overlays/reply";
import { Starter } from "./pages/overlays/starter";
import { OL } from "./components/globalComponents";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/starter">
            <OL el={<Starter />} />
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
