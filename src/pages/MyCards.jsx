import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";
import { useEffect } from "react";
import cardService from "../services/cardService";
import Bcard from "../components/Bcard";
import { useCards } from "../hooks/useCards";
import { useAuth } from "../context/auth.context";
import { useSearch } from "../context/search.context";

function MyCards() {
  const { handleLike, handleDelete, cards } = useCards();
  const { user } = useAuth();
  const { search } = useSearch();

  const filterCards = cards.filter((card) =>
    card.title.toLowerCase().includes(search)
  );
  if (!user) {
    return <div>Loading user....</div>;
  }
  const myCards = filterCards.filter((card) => card?.user_id == user?._id);

  return (
    <div className="container">
      <PageHeader
        title="My Cards"
        description="Here you can see all cards you created"
      />
      <CreateCardButton />
      <div className="row">
        {myCards.length > 0 ? (
          myCards.map((card) => (
            <div key={card?._id} className="col-12 col-md-6 col-lg-3 mb-4">
              <Bcard card={card} onLike={handleLike} onDelete={handleDelete} />
            </div>
          ))
        ) : (
          <div>No Cards To Show</div>
        )}
      </div>
    </div>
  );
}

export default MyCards;
