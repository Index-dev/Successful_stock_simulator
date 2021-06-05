import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import home from "routes/home";
import login from "routes/login";
import typetest from "routes/typetest";

function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/login" exact component={login} />
        <Route path="/typetest" exact component={typetest} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Pages;
