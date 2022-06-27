import logo from "../images/tony.jpg";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

export const Navbar = () => {
  const { Links } = useGlobalContext();
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="torban" className="nav-logo" />
        </Link>
        <Link to="/">
          <h1>Torban</h1>
        </Link>
      </div>

      <nav className="nav">
        <div className="nav-center">
          <ul className="nav-links">
            {Links.map((item) => {
              const { id, name } = item;
              const link = name.toLowerCase().replace(" ", "");
              return (
                <Link
                  to={`/${name === "Home" ? "" : link}`}
                  className="btn nav-btn"
                  key={id}
                >
                  {name}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};
