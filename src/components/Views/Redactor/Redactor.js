import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Redactor.css";
import "../Formulario/Formulario.css";
import Formulario from "../Formulario/Formulario";

class Redactor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puestoPath: "",
      tipoPlaza: "",
      fechaPublicacion: ""
    };
  }

  componentWillMount(props) {
    var pathPuesto = this.props.location.pathname;
    var puesto = pathPuesto.substring(1);
    this.setState({
      puesto: puesto,
      tipoPlaza: "activo",
      fechaPublicacion: "08/02/19"
    });
  }

  render() {
    return (
      <div className="container">
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
              <p className="">
                Estamos buscando a una persona apasionada por la edición, que
                siempre este en búsqueda de nuevas creaciones y retos.
                {this.state.puesto}
                {this.state.puesto}
                {this.state.puesto}
                {this.state.puesto}
                {this.state.puesto}
                {this.state.puesto}
                {this.state.puesto}
              </p>
              <h3>¿Qué estará en tus manos?</h3>
              <p className="">
                Tu trabajo consistirá en la creación de piezas audiovisuales,
                participaras en las conceptualizaciones creativas editando y
                animando las mismas. Para ello tendrás que ser una persona
                sumamente organizada y detallista, pues tendrás fechas límites
                de entregas.
              </p>
              <h3>Requisitos</h3>
              <p />
              <h3>Horario Laboral</h3>
              <ul className="">
                <li>After Effects Intermedio.</li>
                <li>Photoshop Básico.</li>
                <li>Illustrator Básico.</li>
                <li>
                  Motion Graphics (Animación Digital – Junior / manejar las
                  herramientas de transformación, máscaras, transiciones,
                  cromas, etc.)
                </li>
                <li>
                  Edición de videos (Cortes, Composición de escenas,
                  musicalización, etc.)
                </li>
                <li>Post-producción. (Colorización, Tracking, etc).</li>
              </ul>
            </article>
          </div>
        </div>
        <Formulario />
      </div>
    );
  }
}

export default Redactor;
