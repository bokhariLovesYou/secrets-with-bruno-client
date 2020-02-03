import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Components
import Navbar from "./Navbar";
import Wrapper from "./Wrapper";
import Playarea from "./Playarea";
import GA from "./GAListener";
// Import Pages
import home from "../pages/home";
import secret from "../pages/secret";
import privateSecret from "../pages/privateSecret";
import about from "../pages/about";
import why from "../pages/why";
import notfound from "../pages/notfound";

export default class Approutes extends Component {
  render() {
    return (
      <Router>
        {GA.init() && <GA.RouteTracker />}
        <Wrapper>
          <Navbar />
          <Playarea>
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/secret" component={secret} />
              <Route path="/privatesecret" component={privateSecret} />
              <Route exact path="/about" component={about} />
              <Route exact path="/why" component={why} />
              <Route path="*" component={notfound} status={404} />
            </Switch>
          </Playarea>
        </Wrapper>
      </Router>
    );
  }
}
