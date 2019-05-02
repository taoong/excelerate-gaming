import React, { Component } from "react";
import "./Events.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Events extends Component {
  render() {
    return (
      <div id="events">
        <Nav />
        <section className="jumbotron">
          <div className="jumbotron-content">
            <h1>Events</h1>
          </div>
        </section>

        <div className="container-raised">
          <section className="tabs" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Events;
