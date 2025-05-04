import { useAuth } from "../context/auth.context";
import { NavLink } from "react-router";

function NavbarLinkComponent() {
  const { user } = useAuth();

  return (
    <>
      <li className="nav-item">
        <NavLink
          className="nav-link active fs-5"
          aria-current="page"
          to="/about"
        >
          About
        </NavLink>
      </li>
      {user ? (
        <li className="nav-item">
          <NavLink
            className="nav-link active fs-5"
            aria-current="page"
            to="/fav-cards"
          >
            Fav Cards
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      {user?.isBusiness || user?.isAdmin ? (
        <li className="nav-item">
          <NavLink
            className="nav-link active fs-5"
            aria-current="page"
            to="/my-cards"
          >
            My Cards
          </NavLink>
        </li>
      ) : (
        <></>
      )}
      {user?.isAdmin ? (
        <li className="nav-item">
          <NavLink
            className="nav-link active fs-5"
            aria-current="page"
            to="/sand-box"
          >
            SandBox
          </NavLink>
        </li>
      ) : (
        <></>
      )}
    </>
  );
}

export default NavbarLinkComponent;
