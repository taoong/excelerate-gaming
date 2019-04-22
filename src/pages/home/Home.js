import React, { Component } from "react";
import "./Home.scss";
import Nav from "../../components/Nav";
import Tilt from "react-tilt";

class Home extends Component {
  render() {
    const tiltOptions = {
      reverse: true, // reverse the tilt direction
      max: 15, // max tilt rotation (degrees)
      perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
      scale: 1.04, // 2 = 200%, 1.5 = 150%, etc..
      speed: 1100, // Speed of the enter/exit transition
      transition: true, // Set a transition on enter/exit.
      axis: null, // What axis should be disabled. Can be X or Y.
      reset: true, // If the tilt effect has to be reset on exit.
      easing: "cubic-bezier(.03,.98,.52,.99)" // Easing on enter/exit.
    };

    return (
      <div id="home">
        <Nav />
        <section className="jumbotron">
          <div className="jumbotron-content">
            <h1>Excelerate Gaming vs Denial Esports.</h1>
            <h3>
              Watch the video now, give it a like, smash that subscribe button
            </h3>
            <a href="https://www.youtube.com/watch?v=Vl3Fb92x_oA">
              <button
                className="video"
                href="https://www.youtube.com/watch?v=Vl3Fb92x_oA"
              >
                WATCH VIDEO
              </button>
            </a>
          </div>
        </section>
        <div className="container-raised">
          <h1 className="section-title">Recent News</h1>
          <section className="news">
            <Tilt options={tiltOptions}>
              <a href="https://rainbow6.ubisoft.com/siege/en-us/news/152-335837-16/season-8-challenger-league-week-2-recap">
                <div class="card" data-tilt>
                  <div class="card-img">
                    <img
                      src={require("../../images/card-1.jpg")}
                      alt="Not found!"
                    />
                  </div>
                  <div class="card-content">
                    <h1 class="title">
                      Season 8 Challenger League Week 2 Recap
                    </h1>
                    <p class="description">
                      Highlights, awards, and other stuff.
                    </p>
                    <p class="credits">View Article > </p>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt options={tiltOptions}>
              <a href="https://rainbow6.ubisoft.com/siege/en-us/news/152-335837-16/season-8-challenger-league-week-2-recap">
                <div class="card" data-tilt>
                  <div class="card-img">
                    <img
                      src={require("../../images/card-1.jpg")}
                      alt="Not found!"
                    />
                  </div>
                  <div class="card-content">
                    <h1 class="title">
                      Season 8 Challenger League Week 2 Recap
                    </h1>
                    <p class="description">
                      Highlights, awards, and other stuff.
                    </p>
                    <p class="credits">View Article > </p>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt options={tiltOptions}>
              <a href="https://rainbow6.ubisoft.com/siege/en-us/news/152-335837-16/season-8-challenger-league-week-2-recap">
                <div class="card" data-tilt>
                  <div class="card-img">
                    <img
                      src={require("../../images/card-1.jpg")}
                      alt="Not found!"
                    />
                  </div>
                  <div class="card-content">
                    <h1 class="title">
                      Season 8 Challenger League Week 2 Recap
                    </h1>
                    <p class="description">
                      Highlights, awards, and other stuff.
                    </p>
                    <p class="credits">View Article > </p>
                  </div>
                </div>
              </a>
            </Tilt>
            <Tilt options={tiltOptions}>
              <a href="https://rainbow6.ubisoft.com/siege/en-us/news/152-335837-16/season-8-challenger-league-week-2-recap">
                <div class="card" data-tilt>
                  <div class="card-img">
                    <img
                      src={require("../../images/card-1.jpg")}
                      alt="Not found!"
                    />
                  </div>
                  <div class="card-content">
                    <h1 class="title">
                      Season 8 Challenger League Week 2 Recap
                    </h1>
                    <p class="description">
                      Highlights, awards, and other stuff.
                    </p>
                    <p class="credits">View Article > </p>
                  </div>
                </div>
              </a>
            </Tilt>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
