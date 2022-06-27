import React from "react";
import { useGlobalContext } from "../context";

export const Gamejam = () => {
  const data = useGlobalContext();
  const { GameJams } = data;
  return (
    <section className="section-var section-c">
      <div className="section-spacing">
        <article className="game-jams">
          <h2>Game Jams</h2>
          <p>
            This year I'm focusing on participating in game jams. 48-72 hour
            long events to make a game. I'm using these as opportunities to get
            experience with fast development cycles, and to explore new
            boundaries of game dev skills.
          </p>
          <div className="jam-list">
            {GameJams.map((jam) => {
              const { id, title, link, description, date, img } = jam;
              return (
                <article key={id} className="jam-article">
                  <h2>{date}</h2>
                  <a href={link}>
                    <img src={img} alt={title} />
                    <h3 className="jam-btn">{title}</h3>
                  </a>
                  <p>{description}</p>
                </article>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
};
