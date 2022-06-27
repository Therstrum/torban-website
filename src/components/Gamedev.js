import React from "react";
import { Gamejam } from "./Gamejam";
import { Gamelist } from "./Gamelist";

export const Gamedev = () => {
  return (
    <main>
      <section className="game-hero section-small">
        <div className="section-center">
          <div className="text-box">
            <h1>Unity C# Game Developer</h1>
          </div>
        </div>
      </section>
      <Gamejam />
      <Gamelist />
      {/* hero
game jam + countdown
games
skills
inspiration */}
      {/* <div className="section-break"></div> */}
    </main>
  );
};
