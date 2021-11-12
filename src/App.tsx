import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
// import { Reply } from "./pages/Reply";
import { Starter } from "./pages/Starter";
import { Privacy } from "./pages/Privacy";

// Components
import { OL } from "./components/GlobalComponents";
import { StBase } from "./components/StyledComps";
import { CookieConsentBox } from "./components/cookieConsent/cookieConsent";
import { getCookie, setCookie } from "./components/cookieConsent/manageCookies";

export interface ICookiesObj {
  [index: string]: {
    show: Boolean;
    necessary: Boolean;
    analytics: Boolean;
    advertisement: Boolean;
  };
}

function App(): JSX.Element {
  const [nsfw, setNsfw] = useState(false);
  const [consent, setConsent]: any = useState({
    show: true,
    necessary: true,
    analytics: false,
    advertisement: false,
  });

  useEffect(() => {
    let inc = document.cookie.includes("selection");
    if (consent.show && inc) setConsent(getCookie(consent));
    else if (!consent.show && !inc) {
      setCookie(consent);
    }
  }, [consent, setConsent]);

  return (
    <div className="App">
      <StBase>
        <Router>
          <CookieConsentBox consent={[consent, setConsent]} />
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
