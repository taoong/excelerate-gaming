import React, { Component } from "react";
import "./Teams.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
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
    } else if (this.state.team === "Halo") {
      return this.renderHalo();
    } else if (this.state.team === "PUBG") {
      return this.renderPUBG();
    } else if (this.state.team === "CS:GO") {
      return this.renderCSGO();
    } else if (this.state.team === "Hearthstone") {
      return this.renderHearthstone();
    }
  };

  renderCOD = () => {
    return (
      <div>
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"TAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, TAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
      </div>
    );
  };

  renderHalo = () => {
    return (
      <div>
        <Member
          gamingName={"JTAN"}
          fullName={"Justin Tan"}
          playerRole={"Player"}
          description={
            "After founding Excelerate Gaming in 2018, JTAN is known to be in the top 10 ranked founders in the world."
          }
        />
        <Member
          gamingName={"JTAN"}
          fullName={"Justin Tan"}
          playerRole={"Player"}
          description={
            "After founding Excelerate Gaming in 2018, JTAN is known to be in the top 10 ranked founders in the world."
          }
        />
        <Member
          gamingName={"JTAN"}
          fullName={"Justin Tan"}
          playerRole={"Player"}
          description={
            "After founding Excelerate Gaming in 2018, JTAN is known to be in the top 10 ranked founders in the world."
          }
        />
      </div>
    );
  };

  renderPUBG = () => {
    return (
      <div>
        <Member
          gamingName={"PAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, PAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"PAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, PAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"PAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, PAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
      </div>
    );
  };

  renderCSGO = () => {
    return (
      <div>
        <Member
          gamingName={"CAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, CAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"CAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, CAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"CAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, CAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
      </div>
    );
  };

  renderHearthstone = () => {
    return (
      <div>
        <Member
          gamingName={"HAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, HAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"HAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, HAEYO is known to be in the top 10 ranked web developers in the world."
          }
        />
        <Member
          gamingName={"HAEYO"}
          fullName={"Tao Ong"}
          playerRole={"Player"}
          description={
            "Signed by Excelerate Gaming in 2019, HAEYO is known to be in the top 10 ranked web developers in the world."
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
              <h3>CALL OF DUTY</h3>
            </button>
            <button
              className={this.getTabStyle("Halo")}
              onClick={() => this.changeTeam("Halo")}
            >
              <h3>HALO</h3>
            </button>
            <button
              className={this.getTabStyle("PUBG")}
              onClick={() => this.changeTeam("PUBG")}
            >
              <h3>PUBG</h3>
            </button>
            <button
              className={this.getTabStyle("CS:GO")}
              onClick={() => this.changeTeam("CS:GO")}
            >
              <h3>CS:GO</h3>
            </button>
            <button
              className={this.getTabStyle("Hearthstone")}
              onClick={() => this.changeTeam("Hearthstone")}
            >
              <h3>HEARTHSTONE</h3>
            </button>
          </section>
          <section className="members">{this.renderMembers()}</section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Teams;
