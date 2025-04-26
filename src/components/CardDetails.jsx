import { useEffect, useState } from "react";
import cardService from "../services/cardService";
import { useParams } from "react-router";
import ShowCardDetails from "./ShowCardDetails";
import { useCards } from "../hooks/useCards";

function CardDetails() {
  const { id } = useParams();
  const { isLoading } = useCards();

  const [card, setCard] = useState(null);

  useEffect(() => {
    const loadCard = async () => {
      try {
        const cardDetail = await cardService.getCardById(id);
        setCard(cardDetail.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadCard();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <ShowCardDetails key={card?._id} card={card} />
      )}
    </>
  );
  // return <ShowCardDetails key={card?._id} card={card} />;
}

export default CardDetails;
