import React, { Component } from "react";
import "./Formulario.css";
import { FormErrors } from "./FormErrors/FormErrors";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      email: "",
      dni: "",
      formErrors: { nombre: "", email: "" },
      nombreValid: false,
      emailValid: false,
      formValid: false,
      dniValid: false,
    };
    this.typing = this.typing.bind(this);
    this.validateField = this.validateField.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.errorClass = this.errorClass.bind(this);
  }

  typing(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nombreValid = this.state.nombreValid;
    let emailValid = this.state.emailValid;
    let dniValid = this.state.dniValid;

    switch (fieldName) {
      case "nombre":
        nombreValid = value.length >= 6;
        fieldValidationErrors.nombre = nombreValid ? "" : " is too short";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " inválido";
        break;
      case "dni":
        dniValid = value.length > 7 && value*0 === 0;
        fieldValidationErrors.dni= dniValid ? "" : " inválido";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        nombreValid: nombreValid,
        emailValid: emailValid,
        dniValid: dniValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nombreValid && this.state.dniValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.nombre
          )}`}
        >
          <label htmlFor="nombre">nombre</label>
          <input
            type="nombre"
            className="form-control"
            name="nombre"
            placeholder="nombre"
            value={this.state.nombre}
            onChange={this.typing}
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.email
          )}`}
        >
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            required
            className="form-control"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.typing}
          />
        </div>

         <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.email
          )}`}
        >
          <label htmlFor="email">Dni </label>
          <input
            type="tel"
            required
            className="form-control"
            name="dni"
            placeholder="Dni"
            value={this.state.dni}
            onChange={this.typing}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={!this.state.formValid}
        >
          Sign up
        </button>
      </form>
    );
  }
}

export default Formulario;
