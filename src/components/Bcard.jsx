import { Link } from "react-router";

function Bcard({ card }) {
  return (
    <div className="card" style={{ width: "18rem", height: "40rem" }}>
      <img
        src={card.image?.url}
        className="card-img-top h-50"
        alt={card.image?.alt}
      />
      <div className="card-body">
        <Link to={`/card-details/${card._id}`}>
          <h2 className="card-title">{card.title}</h2>
          <h4>{card.subtitle}</h4>
        </Link>
      </div>
      <ul className="list-group group-flush">
        <li className="list-group-item">
          <span>Phone: </span>
          {card.phone}
        </li>
        <li className="list-group-item">
          <span>Address: </span>
          {`${card.address.street} ${card.address.houseNumber}, ${card.address.city}`}
        </li>
        <li className="list-group-item">
          <span>Card Number: </span>
          {card.bizNumber}
        </li>
      </ul>
      <div className="card-footer">
        <a href={`tel: ${card.phone}`}>
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
}

export default Bcard;
