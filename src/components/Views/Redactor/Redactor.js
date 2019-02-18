import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Redactor.css";
import "../Formulario/Formulario.css";
import Formulario from "../Formulario/Formulario";
import axios from "axios";

class Redactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puesto: "",
      disponibilidadPuesto: "",
      tipoPlaza: "",
      fechaPublicacion: "",
      perfilPuesto: "",
      descriptionPuesto: "",
      requisitosPuesto: "",
      horarioPuesto: ""
    };
  }

  componentWillMount(props) {
  
    var pathPuesto = this.props.location.pathname;
    var puesto = pathPuesto.substring(1);
    let self = this;

    axios({
      method: "GET",
      url: "https://www.circuit.com.pe/api/v1/jobs/feed"
    }).then(function(response) {
      let objetoPuesto = response.data.careers;
  
      for (var i = 0; i < objetoPuesto.length; i++) {
      
        if (objetoPuesto[i].slug === puesto) {
   
          let nombrePuesto = objetoPuesto[i].name;
          let descriptionPuesto = objetoPuesto[i].description;
          let perfilPuesto = objetoPuesto[i].responsabilites;
          let horarioPuesto =  objetoPuesto[i].journey;

          self.setState({
            puesto: nombrePuesto,
            descriptionPuesto: descriptionPuesto,
            perfilPuesto: perfilPuesto,
            disponibilidadPuesto: "",
            tipoPlaza: "",
            fechaPublicacion: "",
            requisitosPuesto: "",
            horarioPuesto: horarioPuesto
          });
        }
      }
    });
  }

  render() {
    return (
      <div className="container" onClick={this.click}>
        <h1>{this.state.puesto}</h1>
        <div className="row">
          <div className="col-12">
            <div className="header-puesto">
              <div className="back-page" />
              <div className="fechas">
                {this.state.tipoPlaza}/ Publicado: {this.state.fechaPublicacion}
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <article>
              t<h1>¿A quién buscamos?</h1>
              <p className="">{this.state.descriptionPuesto}</p>
              <h3>¿Qué estará en tus manos?</h3>
              <p className="">{this.state.perfilPuesto}</p>
              <h3>Requisitos</h3>
              <p />
              <ul className="">
                {/* {this.state.requisitosPuesto.map((requisito, i) => (
                  <li key={i}>{requisito}</li>
                ))} */}
              </ul>
              <h3>Horario Laboral</h3>
              <p>{this.state.horarioPuesto}</p>
            </article>
          </div>
        </div>
        <Formulario />
      </div>
    );
  }
}

export default Redactor;
