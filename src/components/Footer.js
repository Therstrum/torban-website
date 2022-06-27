import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const Footer = () => {
  const { ExternalLinks } = useGlobalContext();

  return (
    <footer>
      <nav className="nav">
        <div className="nav-center">
          <ul className="nav-links">
            {ExternalLinks.map((item) => {
              const { id, icon, link } = item;
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
                    </a>
                  ) : (
                    <Link to="/contact" id={id} className="footer-btn">
                      {icon}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </footer>
  );
};
