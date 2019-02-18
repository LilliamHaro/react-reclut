import React, { Component } from "react";
import "./App.css";

import { BrowserRouter, HashRouter, Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: "",
      subtitulo: "",
      objetopuesto: []
    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.click();
  }

  click() {
    var pathPuesto = window.location.hash;
    var puesto = pathPuesto.substring(2);

    var self = this;
    axios({
      method: "GET",
      url: "https://www.circuit.com.pe/api/v1/jobs/feed"
    }).then(function(response) {
      let objetoPuesto = response.data.careers;
      self.setState({
        objetopuesto: objetoPuesto
      });

      if (puesto !== "") {
        for (var i = 0; i < objetoPuesto.length; i++) {
          if (objetoPuesto[i].slug === puesto) {
            self.setState({
              titulo: objetoPuesto[i].name,
              subtitulo: "diponibilidad",
            });
          }
        }
      } else {
        self.setState({
          titulo: "oportunidades laborales",
          subtitulo: "",
        });
      }
    });
  }

  render() {
    return (
      <HashRouter>
        <div className="App" onClick={this.click}>
          <Header titulo={this.state.titulo} subtitulo={this.state.subtitulo} />
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
