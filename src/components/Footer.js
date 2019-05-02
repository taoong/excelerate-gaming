import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-icons">
          <a href="https://www.facebook.com/excelerategg">
            <i className="fa fa-facebook" />
          </a>
          <a href="https://www.twitter.com/excelerategg">
            <i className="fa fa-twitter" />
          </a>
          <a href="https://www.instagram.com/excelerategg">
            <i className="fa fa-instagram" />
          </a>
        </div>
        <div className="copyright">Copyright © 2019. All Rights Reserved.</div>
      </div>
    );
  }
}

export default Footer;
