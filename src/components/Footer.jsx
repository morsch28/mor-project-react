import { useNavigate } from "react-router";
import { useTheme } from "../context/theme.context";
import { useAuth } from "../context/auth.context";

function Footer() {
  const { mode } = useTheme();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <footer
      className={`border-top  border-2 d-flex justify-content-center fs-5 fw-bold bg-light footer ${
        mode == "dark" ? "bg-black" : ""
      }`}
    >
      <div className="d-flex container justify-content-between">
        <div className="d-flex align-items-center">
          This site made by: Mor Schneider {new Date().getFullYear()}
        </div>

        <div className="d-flex gap-5">
          <div className="d-flex flex-column">
            <button
              onClick={() => navigate("/about")}
              className="border-0 bg-transparent fs-5"
            >
              <i className="bi bi-info-circle-fill"></i>
            </button>
            <span className="fs-6">About</span>
          </div>
          {user ? (
            <>
              <div className="d-flex flex-column">
                {/* Favorite Cards Button */}
                <button
                  onClick={() => navigate("/fav-cards")}
                  className="border-0 bg-transparent fs-5"
                >
                  <i className="bi bi-heart-fill text-danger"></i>
                </button>
                <span className="fs-6">Favorites</span>
              </div>
            </>
          ) : (
            <div></div>
          )}
          {user?.isBusiness ? (
            <div className="d-flex flex-column">
              {/* My-Cards Button */}
              <button
                onClick={() => navigate("/my-cards")}
                className="border-0 bg-transparent fs-5"
              >
                <i className="bi bi-person-square"></i>
              </button>
              <span className="fs-6">My Cards</span>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
