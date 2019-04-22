import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  state = {
    isTop: true
  };

  componentDidMount = () => {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  };

  render() {
    return (
      <nav className={this.state.isTop ? "nav" : "nav light"}>
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
