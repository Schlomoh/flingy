import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Home />
    </Router>
  );
};

export default App;
