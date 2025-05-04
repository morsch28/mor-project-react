import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";
import { useAuth } from "../context/auth.context";
import Bcard from "../components/Bcard";
import { useCards } from "../hooks/useCards";
import { useSearch } from "../context/search.context";

function FavCards() {
  const { cards, handleLike, isLoading } = useCards();
  const { user } = useAuth();
  const { search } = useSearch();

  const filterCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search)
  );

  return (
    <div className="container">
      <PageHeader
        title="Favorite cards"
        description="Here you can find you favorite cards"
      />
      {user?.isBusiness && <CreateCardButton />}
      {isLoading ? (
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {filterCards.map((card) =>
            card.liked ? (
              <div key={card._id} className="col-12 col-md-6 col-lg-3 mb-4">
                <Bcard card={card} onLike={handleLike} />
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
}

export default FavCards;
