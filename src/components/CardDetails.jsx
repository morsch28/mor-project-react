import { useEffect, useState } from "react";
import cardService from "../services/cardService";
import { useParams } from "react-router";
import ShowCardDetails from "./ShowCardDetails";

function CardDetails() {
  /*
{
  id: '66e3eaaff9d3ea58f6fe3335'
}
*/
  const params = useParams();

  const [card, setCard] = useState(null);

  useEffect(() => {
    const loadCard = async () => {
      try {
        const cardDetail = await cardService.getCardById(params.id);
        setCard(cardDetail);
        console.log(cardDetail);
      } catch (error) {
        console.log(error);
      }
    };
    loadCard();
  }, []);

  return <ShowCardDetails key={card?._id} card={card} />;
}

export default CardDetails;
