import React, { Component } from "react";
import "./Teams.scss";

class Member extends Component {
  render() {
    return (
      <div className="member">
        <img src={require("../../images/profile-1.jpg")} alt="Not found!" />
        <div>
          <h1>{this.props.gamingName}</h1>
          <h3>{this.props.fullName}</h3>
          <h4>Role: {this.props.playerRole}</h4>
        </div>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Member;
