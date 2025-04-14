import { useState } from "react";
import { Link } from "react-router";
import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";
// import { useCards } from "../context/cards.context";
// import { useCards } from "./ShowAllCards";
// import { useAuth } from "../context/auth.context";

function Bcard({ card, onLike }) {
  const { user } = useAuth();
  // const { handleLike } = useCards();
  const isOwner = card?.user_id == user?._id;
  // const [like, setLike] = useState(false);

  // async function handleLike() {
  //   try {
  //     const data = await cardService.cardLike(card._id);
  //     setLike(!like);
  //     console.log(data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // check are we in the like array
  // async function handleDelete() {
  //   try {
  //     const response = await cardService.deleteCard(card._id);
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="card" style={{ width: "15rem", height: "35rem" }}>
      <img
        src={card.image?.url}
        className="card-img-top cardImg"
        style={{ height: "250px" }}
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
          <button
            onClick={() => onLike(card._id)}
            className="bg-transparent border-0"
          >
            <i
              className={[
                "bi bi-heart-fill",
                card.liked ? "text-danger" : "",
              ].join(" ")}
            ></i>
          </button>
        </div>
        {user?.isAdmin || (user?.isBusiness && isOwner) ? (
          <div className="d-flex gap-3">
            <button className="border-0 bg-transparent fs-6">
              <i className="bi bi-trash3-fill"></i>
            </button>
            <button className="border-0 bg-transparent fs-6">
              <i className="bi bi-pencil"></i>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Bcard;
