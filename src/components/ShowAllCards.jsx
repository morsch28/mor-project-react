import Bcard from "./Bcard";
import { useCards } from "../hooks/useCards";
import { useEffect } from "react";
import { useSearch } from "../context/search.context";

function ShowAllCards() {
  const { cards, isLoading, handleLike, handleDelete } = useCards();
  const { filterCards } = useSearch();
  return (
    <div>
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {filterCards.length > 0 ? (
            filterCards.map((card) => (
              <div key={card._id} className="col-12 col-md-6 col-lg-3 mb-4">
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
