import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Teams from "./pages/teams/Teams";
import Events from "./pages/events/Events";
import Contact from "./pages/contact/Contact";
import Notfound from "./pages/notfound/Notfound";

const routing = (
  <Router>
    <div id="router">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
