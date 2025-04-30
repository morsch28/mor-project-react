import { useEffect } from "react";
import { useState } from "react";
import cardService from "../services/cardService";
import { useAuth } from "../context/auth.context";
import { normalizeCards } from "../cards/normalizeCards";

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
  }, [user]);

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

  async function handleDelete(id) {
    try {
      const response = await cardService.deleteCard(id);
      setCards(cards.filter((card) => card._id != id));
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreateNewCard(values) {
    try {
      const normalizeCard = normalizeCards(values);
      const response = await cardService.CreateNewCard(normalizeCard);
      setCards([...cards, response]);
      return response;
    } catch (err) {
      throw err;
    }
  }
  async function handleUpdateCard(id, cardData) {
    try {
      const response = await cardService.updateCard(id, cardData);
      setCards(
        cards.map((card) => (card._id == id ? { ...card, response } : card))
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  return {
    cards,
    handleLike,
    isLoading,
    handleDelete,
    handleCreateNewCard,
    handleUpdateCard,
    setCards,
  };
};
