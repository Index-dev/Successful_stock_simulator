import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import home from "routes/home";
import login from "routes/login";
import typetest from "routes/typetest";
import landing from "routes/landing";

function Pages() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/login" exact component={login} />
        <Route path="/typetest" exact component={typetest} />
        <Route path="/landing" exact component={landing} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default Pages;
