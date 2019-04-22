import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div id="home">
        <header className="Home-header">
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="Home-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
