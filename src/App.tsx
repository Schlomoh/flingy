import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Reply } from "./pages/Reply";
import { Starter } from "./pages/Starter";

import { OL } from "./components/GlobalComponents";

function App() {
  const [nsfw, setNsfw] = useState(false);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/starter">
            <OL
              nsfw={nsfw}
              el={<Starter nsfw={{ get: nsfw, set: setNsfw }} />}
            />
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
