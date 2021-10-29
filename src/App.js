import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Switch>
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
    </>
  );
}

export default App;
