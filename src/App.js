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
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
    },
  };

  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home containerVariants={containerVariants} />
          </Route>
          <Route path="/destination" exact>
            <Destination containerVariants={containerVariants} />
          </Route>
          <Route path="/crew" exact>
            <Crew />
          </Route>
          <Route path="/technology" exact>
            <Technology containerVariants={containerVariants} />
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
