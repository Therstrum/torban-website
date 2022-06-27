import React from "react";
import { useGlobalContext } from "../context";

export const Roadmap = () => {
  const data = useGlobalContext();
  const { ToDoBoard } = data;

  return (
    <section className="section-a section-var">
      <div className="section-spacing"></div>
      <h2>Roadmap</h2>
      <div className="flex-container">
        <div className="to-do-container">
          {ToDoBoard.map((list) => {
            const { title, items, bucketId } = list;
            return (
              <article key={bucketId} className="list-container">
                <div className="todo-item">
                  <h4>{title}</h4>
                  <ul>
                    {items.map((item) => {
                      const { name, id } = item;
                      return <li key={id}>{name}</li>;
                    })}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
