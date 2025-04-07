import { useEffect } from "react";
import { useState } from "react";
import cardService from "../services/cardService";
import Bcard from "./Bcard";

function ShowAllCards() {
  const [cards, setCards] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await cardService.getAllCardsService();
        setCards(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    loadCards();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-4 justify-content-center">
          {cards ? (
            cards.map((card) => <Bcard key={card._id} card={card} />)
          ) : (
            <div>Sorry there is no cards to show</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowAllCards;
