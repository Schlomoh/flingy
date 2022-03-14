// routing
import { MutableRefObject, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// theming
import { ThemeProvider } from "styled-components";
import CookieInfo from "./components/cookieInfo";
import Floaty from "./components/floaty";
import theme from "./components/styleComponents/theme";

// pages
import Home from "./pages/Home";
import PickupPage from "./pages/PickupPage";

const App: React.FC = (): JSX.Element => {
  const worker: MutableRefObject<Worker | undefined> = useRef(undefined);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Floaty />
        <CookieInfo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyzer" element={<PickupPage worker={worker}/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
