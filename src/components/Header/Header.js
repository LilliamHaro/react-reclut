import React, { Component } from "react";
import "./Header.css";
import logoCircuit from "../../assets/logo-circuit.svg";
import "../../assets/hero.png";

import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
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
        <h2>oportunidades laborales</h2>
      </header>
    );
  }
}

export default Header;
