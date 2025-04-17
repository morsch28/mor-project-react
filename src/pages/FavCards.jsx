import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";
import { useAuth } from "../context/auth.context";
import Bcard from "../components/Bcard";
import { useCards } from "../hooks/useCards";

function FavCards() {
  const { cards, handleLike } = useCards();
  const { user } = useAuth();

  return (
    <div className="container">
      <PageHeader
        title="Favorite cards"
        description="Here you can find you favorite cards"
      />
      {user?.isBusiness && <CreateCardButton />}
      <div className="row">
        {user?.isBusiness &&
          cards.map((card) =>
            card.liked ? (
              <div key={card._id} className="col-12 col-md-6 col-lg-3 mb-4">
                <Bcard card={card} onLike={handleLike} />
              </div>
            ) : null
          )}
      </div>
    </div>
  );
}

export default FavCards;
