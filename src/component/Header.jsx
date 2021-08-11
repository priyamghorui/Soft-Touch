import logo from "./photos/logo.png";
import { Link, NavLink } from "react-router-dom";
import "./css/Heading.css";
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid p-0">
        <img src={logo} alt="" style={{ height: 75 }} />
        <Link className="navbar-brand fs-3" to="/">
          Soft Touch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mavber_right_margin">
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                to="/pregnancy"
              >
                Pregnancy
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                to="/baby"
              >
                Baby
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                to="/toddler"
              >
                Toddler
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                to="/pregnancyTips"
              >
                Pregnancy-Tips
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeStyle={{
                  fontWeight: "bold",
                  color: "red",
                }}
                className="nav-link heading_text"
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
