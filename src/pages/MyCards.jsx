import { useState } from "react";
import PageHeader from "../components/common/PageHeader";
import CreateCardButton from "../components/CreateCardButton";
import { useEffect } from "react";
import cardService from "../services/cardService";
import Bcard from "../components/Bcard";

function MyCards() {
  const [myCards, setMyCards] = useState([]);

  useEffect(() => {
    const loadMyCards = async () => {
      try {
        const cards = await cardService.getAllMyCards();
        setMyCards(cards.data);
        return cards;
      } catch (error) {
        console.log(error);
      }
    };
    loadMyCards();
  }, [myCards]);

  return (
    <div className="container">
      <PageHeader
        title="My Cards"
        description="Here you can see all cards you created"
      />
      <CreateCardButton />
      <div className="row">
        {myCards ? (
          myCards.map((card) => (
            <div key={card?._id} className="col-12 col-md-6 col-lg-3 mb-4">
              <Bcard card={card} />
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
