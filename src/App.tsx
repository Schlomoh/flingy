import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import PickupPage from "./pages/PickupPage";

const App: React.FC = (): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyzer" element={<PickupPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
