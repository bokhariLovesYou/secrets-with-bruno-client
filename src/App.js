import React from "react";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import axios from "axios";

// Import Routes
import Approutes from "./components/Approutes";

axios.defaults.baseURL =
  "https://us-central1-secrets-with-bruno-80451.cloudfunctions.net/api";

function App() {
  return (
    <div className="App">
      <Approutes />
    </div>
  );
}

export default App;
