import React from "react";
import { useGlobalContext } from "../context";

export const Gamelist = () => {
  const data = useGlobalContext();
  const { GameList } = data;
  return (
    <section className="section-var section-a">
      <article className="game-list">
        <div className="games-container">
          <h2>My Games</h2>
          <p>A few games that I've finished for previous game jams.</p>
          <div className="flex-container">
            {GameList.map((game) => {
              const { name, id, img, link, description } = game;
              return (
                <div className="flex-item flex-vert" key={id}>
                  <div>
                    <h3>{name}</h3>
                    <a href={link} target="_blank" rel="noreferrer">
                      <img src={img} alt={name} />
                    </a>
                    <p>{description}</p>
                  </div>
                  <div className="flex-end">
                    <a href={link} target="_blank" rel="noreferrer">
                      <div className="hero-btn article-btn">Play now</div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
    </section>
  );
};
