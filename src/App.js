import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";

import Navbar from "./components/Navbar";
import { AnimatePresence } from "framer-motion";
import NotFound from "./components/NotFound";

function App() {

  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination" exact>
            <Destination />
          </Route>
          <Route path="/crew" exact>
            <Crew />
          </Route>
          <Route path="/technology" exact>
            <Technology />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
