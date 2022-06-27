import React from "react";
import { useGlobalContext } from "../context";

export const Contact = () => {
  const { ExternalLinks } = useGlobalContext();
  return (
    <section className="section-trim-big section-a">
      <div className="section-center">
        <div className="contact-box">
          <h3>Contact</h3>
          <p>
            I'd love to connect on game development projects. Reach out to me
            here:
          </p>
          <ul className="contact-links">
            {ExternalLinks.map((item) => {
              const { id, icon, link, display } = item;
              return (
                <li key={id}>
                  {link !== "" ? (
                    <a
                      href={link}
                      className="footer-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {icon}
                      <span>{display}</span>
                    </a>
                  ) : (
                    <a href="/contact">
                      {icon}
                      <span>{display}</span>
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
