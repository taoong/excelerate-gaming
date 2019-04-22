import React, { Component } from "react";
import "./Notfound.scss";

class Notfound extends Component {
  render() {
    return (
      <div id="notfound">
        <h1>Page not found!</h1>
        <p>
          Looks like you've followed a broken link or entered a URL that doesn't
          exist on this site.
        </p>
        <a href="/">
          <button>Go back</button>
        </a>
      </div>
    );
  }
}

export default Notfound;
