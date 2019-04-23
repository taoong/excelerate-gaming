import React, { Component } from "react";
import "./Teams.scss";
import Nav from "../../components/Nav";
import Member from "./Member";

class Teams extends Component {
  state = {
    team: "COD"
  };

  changeTeam = t => {
    this.setState({ team: t });
  };

  getTabStyle = team => {
    if (this.state.team === team) {
      return "tab selected";
    }
    return "tab";
  };

  renderMembers = () => {
    if (this.state.team === "COD") {
      return this.renderCOD();
    }
  };

  renderCOD = () => {
    return (
      <div>
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          role={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          role={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          role={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
      </div>
    );
  };

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
            <button
              className={this.getTabStyle("COD")}
              onClick={() => this.changeTeam("COD")}
            >
              <h2>Call of Duty</h2>
            </button>
            <button
              className={this.getTabStyle("Halo")}
              onClick={() => this.changeTeam("Halo")}
            >
              <h2>Halo</h2>
            </button>
            <button
              className={this.getTabStyle("PUBG")}
              onClick={() => this.changeTeam("PUBG")}
            >
              <h2>PUBG</h2>
            </button>
            <button
              className={this.getTabStyle("CS:GO")}
              onClick={() => this.changeTeam("CS:GO")}
            >
              <h2>CS:GO</h2>
            </button>
            <button
              className={this.getTabStyle("Hearthstone")}
              onClick={() => this.changeTeam("Hearthstone")}
            >
              <h2>Hearthstone</h2>
            </button>
          </section>
          <section className="members">{this.renderMembers()}</section>
        </div>
      </div>
    );
  }
}

export default Teams;
