import { BrowserRouter as Router } from "react-router-dom";
import { Router as AllRoutes } from "./../Router";
import { Header } from "../src/components/Header";

import ScrollToTopButton from "./components/ScrollToTopButton";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTopButton />
      <AllRoutes />
      <SpeedInsights />
    </Router>
  );
}

export default App;
