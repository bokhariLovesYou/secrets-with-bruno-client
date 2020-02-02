import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import axios from "axios";

// Import Pages
import home from "./pages/home";
import secret from "./pages/secret";
import privateSecret from "./pages/privateSecret";
import about from "./pages/about";
import why from "./pages/why";
import notfound from "./pages/notfound";

// Import Components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Playarea from "./components/Playarea";

axios.defaults.baseURL =
  "https://us-central1-secrets-with-bruno-80451.cloudfunctions.net/api";

function App() {
  return (
    <div className="App">
      <Router>
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
    </div>
  );
}

export default App;
