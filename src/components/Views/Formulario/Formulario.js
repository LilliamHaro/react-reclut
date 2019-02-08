import React, { Component } from "react";
import "./Formulario.css";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: ""
    };
    this.typing = this.typing.bind(this);
    this.sendForm = this.sendForm.bind(this);

  }

  typing(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  sendForm(e){
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <h2>Postula aquí</h2>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group form-group-postulacion">
              <label>Nombres</label>
              <input name="nombre" value={this.state.nombre} onChange={this.typing} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group form-group-postulacion">
              <label>Email</label>
              <input name="email" value={this.state.email} onChange={this.typing} />
            </div>
          </div>
        </div>
        <div className="row">
          <button onClick={this.sendForm} className="btn">Postular</button>
        </div>
      </form>
    );
  }
}

export default Formulario;
