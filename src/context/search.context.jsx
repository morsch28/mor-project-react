import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { useCards } from "../hooks/useCards";

export const searchContext = createContext();
searchContext.displayName = "Search";

export function SearchProvider({ children }) {
  const [search, setSearch] = useState("");
  // const { cards } = useCards();
  // const [filterCards, setFilterCards] = useState("");

  const updateSearch = (newSearch) => {
    setSearch(newSearch.toLowerCase());
  };

  // useEffect(() => {
  //   if (search) {
  //     setFilterCards(
  //       cards.filter((card) => card.title.toLowerCase().includes(search))
  //     );
  //   } else {
  //     setFilterCards(cards);
  //   }
  // }, [cards, search]);

  return (
    <searchContext.Provider value={{ search, updateSearch }}>
      {children}
    </searchContext.Provider>
  );
}
export function useSearch() {
  return useContext(searchContext);
}
