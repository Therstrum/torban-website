import React from "react";
import { Bio } from "./Bio";
import { Roadmap } from "./Roadmap";

export const About = () => {
  return (
    <main>
      <section className="section-small about-hero">
        <div className="section-center">
          <div className="text-box">
            <h2 className="subsection-heading">
              Learning
              <br />
              Growing
              <br />
              Automating workflows
              <br />
              Building integrations
            </h2>
          </div>
        </div>
      </section>
      <div className="section-break"></div>
      <section className="section-small-2 section-whitespace">
        <div className="section-center">
          <div className="text-box">
            <p>
              <br />
            </p>
            <h3>About me</h3>
            <p>
              I'm a self-taught developer who works on game development and
              general tech hobbies in my free time. I live and breathe
              innovation. I'm always looking for new challenges to overcome and
              skills to add to my toolkit.
            </p>
          </div>
        </div>
        {/* 
        hero
        about
        skills- make a single-skills component. Display them in a grid or flexbox.
        roadmap- to do, doing, done columns
        projects
        contact */}
      </section>
      <div className="section-break"></div>
      <Bio />
      <Roadmap />
    </main>
  );
};
