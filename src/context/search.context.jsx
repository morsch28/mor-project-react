import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useCards } from "../hooks/useCards";

export const searchContext = createContext();
searchContext.displayName = "Search";

export function SearchProvider({ children }) {
  const [search, setSearch] = useState();
  const [filterCards, setFilterCards] = useState("");
  const { cards } = useCards();

  const updateSearch = (newSearch) => {
    setSearch(newSearch);
  };

  useEffect(() => {
    if (search) {
      setFilterCards(
        cards.filter((card) => card.title.toLowerCase().includes(search))
      );
    } else {
      setFilterCards(cards);
    }
  }, [cards, search]);

  return (
    <searchContext.Provider value={{ search, updateSearch, filterCards }}>
      {children}
    </searchContext.Provider>
  );
}
export function useSearch() {
  return useContext(searchContext);
}
