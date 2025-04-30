import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import feedbackService from "../services/feedbackService";

function Bcard({ card, onLike, onDelete }) {
  const { user } = useAuth();
  const isOwner = card?.user_id == user?._id;
  const navigate = useNavigate();

  return (
    <div
      className="card d-flex flex-column"
      style={{ width: "250px", minHeight: "350px" }}
    >
      <img
        src={card.image?.url}
        className="card-img-top cardImg"
        style={{ height: "200px" }}
        alt={card.image?.alt}
      />
      <div className="card-body" style={{ maxHeight: "140px" }}>
        <Link to={`/card-details/${card._id}`}>
          <h2 className="card-title">{card.title}</h2>
          <h4>{card.subtitle}</h4>
        </Link>
      </div>
      <ul className="list-group group-flush">
        <li className="list-group-item border-0">
          <span>Phone: </span>
          {card.phone}
        </li>
        <li className="list-group-item border-0">
          <span>Address: </span>
          {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}
        </li>
        <li className="list-group-item">
          <span>Card Number: </span>
          {card.bizNumber}
        </li>
      </ul>
      <div className="card-footer d-flex justify-content-between">
        <div className="d-flex gap-3">
          <a href={`tel: ${card.phone}`}>
            <i className="fa-solid fa-phone"></i>
          </a>
          {/* /* Like Button */}
          {user ? (
            <button
              onClick={() => onLike(card?._id)}
              className="bg-transparent border-0"
            >
              <i
                className={[
                  "bi bi-heart-fill",
                  card.liked ? "text-danger" : "",
                ].join(" ")}
              ></i>
            </button>
          ) : (
            <></>
          )}
        </div>
        {user?.isAdmin || (user?.isBusiness && isOwner) ? (
          <div className="d-flex gap-3">
            {/* Delete Button */}
            <button
              onClick={async () => {
                const confirm = await feedbackService.deleteMessage();
                if (confirm) {
                  onDelete(card?._id);
                }
              }}
              className="border-0 bg-transparent fs-6"
            >
              <i className="bi bi-trash3-fill"></i>
            </button>

            {/* Update Button  */}
            <button
              onClick={async () => {
                const confirm = await feedbackService.updateMessage();
                if (confirm) {
                  navigate(`/update-card/${card._id}`);
                }
              }}
              className="border-0 bg-transparent fs-6"
            >
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Bcard;
