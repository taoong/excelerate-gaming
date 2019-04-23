import React, { Component } from "react";
import "./Teams.scss";

class Member extends Component {
  render() {
    return (
      <div className="member">
        <h1>{this.props.gamingName}</h1>
        <h3>{this.props.fullName}</h3>
        <h4>Role: {this.props.role}</h4>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Member;
