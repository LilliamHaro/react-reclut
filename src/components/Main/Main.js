import React, { Component } from "react";
import "./Main.css";

import { Route, Switch, HashRouter,BrowserRouter } from "react-router-dom";
import Home from "../Views/Home/Home";
import Redactor from "../Views/Redactor/Redactor";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rutas: [
        { path: "/redactor" },
        { path: "/front-end" },
        { path: "/disenador" }
      ]
    };
  }

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {this.state.rutas.map((ruta, i) => {
            return <Route key={i} exact path={ruta.path} component={Redactor} />;
          })}
        </Switch>   
      </main>
    );
  }
}

export default Main;
