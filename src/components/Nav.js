import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/admin" className="nav-brand">
          <img
            src={require("../images/logo.png")}
            className="nav-logo"
            alt="logo"
          />
          Excelerate Gaming
        </Link>

        <div className="nav-links">
          <Link className="nav-link" to="/teams">
            TEAMS
          </Link>

          <Link className="nav-link" to="/events">
            EVENTS
          </Link>

          <Link className="nav-link" to="/contact">
            CONTACT
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
