// import { createContext, useContext, useState, useEffect } from "react";
// import { useAuth } from "./auth.context";
// import cardService from "../services/cardService";

// export const cardsContext = createContext();
// cardsContext.displayName = "Cards";

// export default function CardsProvider({ children }) {
//   const [cards, setCards] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const { user } = useAuth();

// useEffect(() => {
//   const loadCards = async () => {
//     try {
//       const response = await cardService.getAllCardsService();
//       setCards(
//         response.data.map((card) => ({
//           ...card,
//           liked: card.likes.includes(user?._id),
//         }))
//       );
//       setIsLoading(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   loadCards();
// }, []);

// const handleLike = async (id) => {
//   const response = await cardService.cardLike(id);

//   setCards((cards) =>
//     cards.map((card) => {
//       if (card._id !== id) {
//         return card;
//       }

//       return {
//         ...response,
//         liked: response.likes.includes(user?._id),
//       };
//     })
//   );
// };

// async function handleDelete(id) {
//   try {
//     const response = await cardService.deleteCard(id);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function updateCard() {
//   try {
//     const response = cardService.updateCard(id);
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// }

//   return (
//     <cardsContext.Provider
//       value={{ cards, isLoading, handleLike, handleDelete, updateCard }}
//     >
//       {children}
//     </cardsContext.Provider>
//   );
// }

// export function useCards() {
//   return useContext(cardsContext);
// }
