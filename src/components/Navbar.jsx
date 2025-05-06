import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";
import { useTheme } from "../context/theme.context";
import { useCards } from "../hooks/useCards";
import { useSearch } from "../context/search.context";
import NavbarLinkComponent from "./NavLinkComponent";
import { useWindowSize } from "@uidotdev/usehooks";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { mode, toggleMode } = useTheme();
  const { updateSearch } = useSearch();
  const size = useWindowSize();

  const isMobile = size.width <= 1200;

  return (
    <nav
      className={`navbar navbar-expand-xl ${
        mode === "light" ? "navbar-custom-light" : "bg-black"
      }`}
      aria-label="Fourth navbar example"
    >
      <div className="container align-items-center gap-2">
        <NavLink
          className="logo text-light fs-2 fw-bold mx-3 nav-link mb-2"
          to="/"
        >
          <span>BCard</span>
        </NavLink>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample04"
          aria-controls="navbarsExample04"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!isMobile ? (
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <NavbarLinkComponent />
          </ul>
        ) : (
          <></>
        )}
        <div className="collapse navbar-collapse" id="navbarsExample04">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-center">
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => updateSearch(e.target.value)}
              />
            </form>
            {isMobile ? <NavbarLinkComponent /> : <></>}
            {user ? (
              <>
                {mode == "light" ? (
                  <button
                    onClick={() => toggleMode()}
                    className="btn bg-transparent fs-4"
                  >
                    <i className="bi bi-moon-fill"></i>
                  </button>
                ) : (
                  <button
                    onClick={() => toggleMode()}
                    className="btn bg-transparent fs-4"
                  >
                    <i className="bi bi-brightness-high-fill"></i>
                  </button>
                )}

                <li className="nav-item">
                  <button
                    className="bg-transparent border-white fs-5 fw-bold text-white"
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </button>
                </li>
                {user || user?.isBusiness || user?.isAdmin ? (
                  <li className="nav-item mx-3">
                    <NavLink
                      className="nav-link active fs-5"
                      aria-current="page"
                      to="/user-info"
                    >
                      User Info
                    </NavLink>
                  </li>
                ) : (
                  <div></div>
                )}
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
