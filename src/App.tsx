import { BrowserRouter as Router } from "react-router-dom";
import { Router as AllRoutes } from "./../Router";
import { Header } from "../src/components/Header";

import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTopButton />
      <AllRoutes />
    </Router>
  );
}

export default App;
