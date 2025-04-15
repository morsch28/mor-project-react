import Bcard from "./Bcard";
import { useCards } from "../hooks/useCards";

function ShowAllCards() {
  const { cards, isLoading } = useCards();

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
                <Bcard card={card} />
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
