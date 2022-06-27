import React from "react";
import biopic from "../images/bio-pic.jpg";
import { FaFlagUsa } from "react-icons/fa";

export const Bio = () => {
  return (
    <section className="section-full section-c">
      <div className="section-spacing">
        <article>
          <div className="flex-container">
            {/* image 
          blurb         bio*/}
            <div className="flex-item-large">
              <img src={biopic} alt="Torban" className="bio-pic" />
            </div>
            <div className="flex-item">
              <h4>Stats</h4>
              <ul>
                <li>
                  <span>Name:</span> Torban
                </li>
                <li>
                  <span>Age:</span> 32
                </li>
                <li>
                  <span>Country:</span> <FaFlagUsa />
                </li>
                <li>
                  <span>Hobbies:</span> Programming, Suntanning, Video Games
                </li>
                <li>
                  <span>Favorite food:</span> Caponata
                </li>
                <li>
                  <span>Favorite movie:</span> Interstellar
                </li>
                <li>
                  <span>Favorite video game:</span> Jet Set Radio Future
                </li>
                <li>
                  <span>Languages: </span> English, Japanese
                </li>
              </ul>
              <h4>Bio</h4>
              <p>
                I've been around tech since before I could walk. I want to use
                my brain to make cool things and help people. I majored in
                international affairs in Tokyo, but now I work at a healthcare
                IT non-profit company. In my dream world, I'm at a small game
                dev studio working on projects I'm passionate about.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
