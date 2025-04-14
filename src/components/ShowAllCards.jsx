import { useEffect } from "react";
import { useState } from "react";
import cardService from "../services/cardService";
import Bcard from "./Bcard";
import { useAuth } from "../context/auth.context";

export const useCards = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const loadCards = async () => {
      try {
        const response = await cardService.getAllCardsService();
        setCards(
          response.data.map((card) => ({
            ...card,
            liked: card.likes.includes(user?._id),
          }))
        );
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    loadCards();
  }, []);

  const handleLike = async (id) => {
    const response = await cardService.cardLike(id);

    setCards((cards) =>
      cards.map((card) => {
        if (card._id !== id) {
          return card;
        }

        return {
          ...response,
          liked: response.likes.includes(user?._id),
        };
      })
    );
  };

  return { cards, handleLike, isLoading };
};

function ShowAllCards() {
  const { cards, handleLike, isLoading } = useCards();

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {cards ? (
            cards.map((card) => (
              <div key={card._id} className="col-12 col-md-6 col-lg-3 mb-4">
                <Bcard onLike={handleLike} card={card} />
              </div>
            ))
          ) : (
            <div>Sorry there is no cards to show</div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShowAllCards;
