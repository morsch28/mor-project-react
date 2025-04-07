import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth.context";

function Navbar() {
  const { user } = useAuth();

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-primary"
      aria-label="Fourth navbar example"
    >
      <div className="container align-items-center">
        <NavLink
          className="logo text-light fs-2 fw-bold mx-3 nav-link mb-2"
          to="/"
        >
          <span>BCard</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {user ? (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-5"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-5"
                aria-current="page"
                to="/fav-cards"
              >
                Fav Cards
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <NavLink
                className="nav-link active fs-5"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        )}
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            {user ? (
              <>
                <button className="btn bg-transparent fs-4">
                  <i className="bi bi-moon-fill"></i>
                </button>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/sign-up"
                  >
                    Sign-Out
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/sign-up"
                  >
                    Sign-Up
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/sign-in"
                  >
                    Sign-In
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
