import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
// import { Reply } from "./pages/Reply";
import { Starter } from "./pages/Starter";
import { Privacy } from "./pages/Privacy";

// Components
import { CookiesFloaty, OL } from "./components/globalComponents";
import { StBase } from "./components/styledComps";
import { CookieConsentBox } from "./components/cookieConsent/cookieConsent";
import { handleCookies } from "./components/cookieConsent/manageCookies";

export interface ICookiesObj {
  [index: string]: {
    necessary: Boolean;
    analytics: Boolean;
    advertisement: Boolean;
  };
}

function App(): JSX.Element {
  const [nsfw, setNsfw] = useState(false);
  const [consent, setConsent]: any = useState();
  const [show, setShow] = useState();

  useEffect(() => {
    handleCookies(consent, setConsent, setShow);
  }, [consent]);

  return (
    <div className="App">
      <StBase>
        <Router>
          {consent !== undefined ? (
            <CookiesFloaty show={[show, setShow]} />
          ) : null}
          <CookieConsentBox
            show={[show, setShow]}
            consent={[consent, setConsent]}
          />
          <Switch>
            <Route path="/starter">
              <OL nsfw={nsfw}>
                <Starter nsfw={{ get: nsfw, set: setNsfw }} />
              </OL>
            </Route>
            {/* <Route path="/reply">
            <OL>
            <Reply />
            </OL>
          </Route> */}
            <Route path="/privacy-policy">
              <Privacy />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </Router>
      </StBase>
    </div>
  );
}

export default App;
