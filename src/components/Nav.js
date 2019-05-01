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

  burgerToggle = () => {
    let linksEl = document.querySelector(".narrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  render() {
    return (
      <nav className={this.state.isTop ? "nav" : "nav light"}>
        <Link to="/" className="nav-brand">
          <img
            src={require("../images/logo.png")}
            className="nav-logo"
            alt="logo"
          />
          Excelerate Gaming
        </Link>

        <div className="nav-links navWide">
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

        <div className="nav-links navNarrow">
          <div id="menuToggle">
            <input type="checkbox" />

            <span />
            <span />
            <span />

            <ul id="menu">
              <Link className="burger-link" to="/teams">
                Teams
              </Link>

              <Link className="burger-link" to="/events">
                Events
              </Link>

              <Link className="burger-link" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
