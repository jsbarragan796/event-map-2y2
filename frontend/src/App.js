import React, { Component } from "react";
import { Col, Row, Grid, Clearfix} from "react-bootstrap";

import { NavHeader } from "./components/globales/navHeader"
import { Main } from "./components/globales/main"
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavHeader/>
        <Main/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
