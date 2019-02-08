import React, { Component } from "react";
import "./Home.css";

import { Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      fakeShow: true,
      tipoPuestos: [
        { titulo: "Tiempo parcial", values: "parcial", active: true },
        { titulo: "Tiempo completo", values: "completo", active: true },
        { titulo: "Freelance", values: "freelance", active: true },
        { titulo: "Remoto", values: "remoto", active: true }
      ],
      tipoPlazas: [
        {
          titulo: "Plaza abierta y en reclutamiento activo",
          values: "recActivo"
        },
        {
          titulo: "Reclutamiento activo pero sin plaza abierta por el momento",
          values: "recInactivo"
        }
      ],
      puestos: [
        {
          titulo: "editor - animador",
          tipo: "parcial",
          tipoTexto: "Tiempo parcial",
          path: "/editor-animador"

        },
        { titulo: "diseñador", tipo: "completo", tipoTexto: "Tiempo completo", path: "/disenador" },
        { titulo: "animador", tipo: "completo", tipoTexto: "Tiempo completo", path: "/animador" },
        { titulo: "redactor", tipo: "freelance", tipoTexto: "Freelance", path: "/redactor" }
      ],
      optionsChecked: []
    };
    this.changeEvent = this.changeEvent.bind(this);
  }

  changeEvent(event) {
    let checkedArray = this.state.optionsChecked;
    let selectedValue = event.target.value;

    if (event.target.checked === true) {
      checkedArray.push(selectedValue);
      this.setState({
        optionsChecked: checkedArray
      });
      if (this.state.optionsChecked.length !== 0) {
        this.setState({
          fakeShow: false
        });
      }
    } else {
      let valueIndex = checkedArray.indexOf(selectedValue);
      checkedArray.splice(valueIndex, 1);

      this.setState({
        optionsChecked: checkedArray
      });

      if (this.state.optionsChecked.length === 0) {
        this.setState({
          fakeShow: true
        });
      }
    }
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-lg-4 ">
          <div className="box tipo-de-empleo">
            <div className="title">
              <h3>Tipo de empleo</h3>
            </div>
            <div className="cuerpo">
              {this.state.tipoPuestos.map((tipoPuesto, i) => {
                if (tipoPuesto.active === true) {
                  return (
                    <div key={i} className="input-wrapp">
                      <input
                        value={tipoPuesto.values}
                        type="checkbox"
                        onChange={this.changeEvent}
                      />
                      <label>{tipoPuesto.titulo}</label>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className="box tipo-de-empleo">
            <div className="title">
              <h3>Tipo de plaza</h3>
            </div>
            <div className="cuerpo">
              {this.state.tipoPlazas.map((tipoPlaza, i) => (
                <div key={i} className="input-wrapp">
                  <input
                    value={tipoPlaza.values}
                    type="checkbox"
                    onChange={this.changeEvent}
                  />
                  <label>{tipoPlaza.titulo}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-8 ">
          <div className="box">
            {this.state.puestos.map((puesto, i) => {
              if (this.state.fakeShow === true) {
                return (
                  <div key={i} className="puesto">
                    <div className="datos">
                      <h3 className="titulo-puesto">
                        <span>{puesto.tipoTexto}</span> •
                        <small>
                          <strong> urgente</strong>
                        </small>
                      </h3>
                      <h1>{puesto.titulo} </h1>
                    </div>
                    <div className="actions">
                      <p>Lima, Perú</p>
                      <p>
                        <Link to={puesto.path} >
                          <span className="btn btn-default">Más info</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              }
            })}

            {this.state.puestos.map((puesto, i) => {
              if (this.state.optionsChecked.indexOf(puesto.tipo) !== -1) {
                return (
                  <div key={i} className="puesto">
                    <div className="datos">
                      <h3 className="titulo-puesto">
                        <span>{puesto.tipoTexto}</span> •
                        <small>
                          <strong> urgente</strong>
                        </small>
                      </h3>
                      <h1>{puesto.titulo} </h1>
                    </div>
                    <div className="actions">
                      <p>Lima, Perú</p>
                      <p>
                      <Link to={puesto.path} >
                          <span className="btn btn-default">Más info</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
      </div>
  

    );
  }
}

export default Home;
