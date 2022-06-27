import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <section className="section-trim section-a">
        <div className="hero-title"></div>
        <div className="section-center">
          <div className="text-box-home">
            <h1>Developing cool stuff</h1>
            <p>
              A self-taught developer making cool stuff and putting it online.{" "}
              <br /> <br />
              Game Development, dotnet libraries, discord bots, and more.
            </p>
          </div>
          <Link className="hero-btn home-btn" to="/about">
            About Me
          </Link>
        </div>
      </section>
      <section className="section-full section-b">
        <div className="section-center">
          <div className="text-box-home">
            <h1>Game Dev</h1>
            <p>
              Game developer working on solo projects and game jams.
              <br /> <br /> Focusing on participating in game jams to increase
              knowledge and development speed.
            </p>
          </div>
          <Link to="/about" className="hero-btn home-btn">
            My Games
          </Link>
        </div>
      </section>
      <section className="section-trim section-c">
        <div className="section-center">
          <div className="text-box-home">
            <h1>Day Job</h1>
            <p>
              Product Engineer using the Epic EHR. <br />
              <br />
              Focusing on integrating 3rd party apps into Epic. Specializing in
              cache code for integration and automation.
            </p>
          </div>
          <Link className="hero-btn home-btn" to="/dayjob">
            About Job
          </Link>
        </div>
      </section>
    </main>
  );
};
