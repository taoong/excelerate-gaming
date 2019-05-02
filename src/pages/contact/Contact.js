import React, { Component } from "react";
import "./Contact.scss";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Nav />
        <section className="jumbotron">
          <div className="jumbotron-content">
            <h1>Contact Us</h1>
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

export default Contact;
