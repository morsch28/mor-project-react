import Bcard from "./Bcard";
import { useCards } from "../hooks/useCards";
import { useEffect } from "react";
import { useSearch } from "../context/search.context";

function ShowAllCards() {
  const { cards, isLoading, handleLike, handleDelete } = useCards();
  const { search } = useSearch();

  const filterCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search)
  );

  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="row gx-2 gy-4">
          {filterCards.length > 0 ? (
            filterCards.map((card) => (
              <div key={card._id} className="col d-flex justify-content-center">
                <Bcard
                  card={card}
                  onLike={handleLike}
                  onDelete={handleDelete}
                />
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
