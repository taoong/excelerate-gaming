import React, { Component } from "react";
import "./Teams.scss";
import Nav from "../../components/Nav";

class Teams extends Component {
  render() {
    return (
      <div id="teams">
        <Nav />
        <section className="jumbotron">
          <div className="jumbotron-content">
            <h1>Teams</h1>
          </div>
        </section>

        <div className="container-raised">
          <section className="tabs">
            <div className="tab">
              <h2>Call of Duty</h2>
            </div>
            <div className="tab">
              <h2>Call of Duty</h2>
            </div>
            <div className="tab">
              <h2>Call of Duty</h2>
            </div>
            <div className="tab">
              <h2>Call of Duty</h2>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Teams;
