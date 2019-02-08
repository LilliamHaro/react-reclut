import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, HashRouter, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Router> */}
          <div className="App">
            <Header />
            <Main />
          </div>
        {/* </Router> */}
      </BrowserRouter>
    );
  }
}

export default App;
