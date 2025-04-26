function ShowCardDetails({ card }) {
  return (
    <div className="card w-75">
      <div className="row">
        <div className="col-6">
          <img
            src={card?.image?.url}
            alt={card?.image?.alt}
            className="img-fluid"
          />
        </div>
        <div className="col-6">
          <h2 className="card-title">{card?.title}</h2>
          <h3 className="card-text">{card?.subtitle}</h3>
          <p className="card-text">{card?.description}</p>
          <p>
            <a className="card-text" href={"tel:" + card?.phone}>
              {card?.phone}
            </a>
          </p>
          <p>
            <a className="card-text" href={"mailto:" + card?.email}>
              {card?.email}
            </a>
          </p>
          <p>
            <a className="card-text" href={card?.web}>
              {card?.web}
            </a>
          </p>
          <p className="card-text">
            {card?.address?.street} {card?.address?.houseNumber},
            {card?.address?.city}, {card?.address?.country},{" "}
            {card?.address?.state}, {card?.address?.zip}
          </p>
          <p className="card-text">{card?.bizNumber}</p>
          <p className="card-text">{card?.createdAt}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCardDetails;
