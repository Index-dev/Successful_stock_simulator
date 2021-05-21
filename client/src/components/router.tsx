import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import home from "routes/home";

function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Pages;
