import React, { Component } from "react";
import "./Header.css";
import logoCircuit from "../../assets/logo-circuit.svg";
import "../../assets/hero.png";

import axios from "axios";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titulo } = this.props;
    const { subtitulo } =  this.props
    const { imgUrl } =  this.props


    return (
      <header>
        <nav className="container">
          <div className="logo">
            <Link to="/">
              <img src={logoCircuit} alt="logo" />
            </Link>
          </div>
          <ul />
        </nav>
        <h2>{this.props.titulo}</h2>
        <h3>{this.props.subtitulo}</h3>
      </header>
    );
  }
}

export default Header;
