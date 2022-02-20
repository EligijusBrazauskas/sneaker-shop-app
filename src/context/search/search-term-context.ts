import React from "react";

interface searchContextInterface {
  searchTerm: string,
  setSearchTerm: (term: string) => void,
  clearSearchTerm: () => void
}

const SearchTermContext = React.createContext<searchContextInterface>({
  searchTerm: '',
  setSearchTerm: () => {
  },
  clearSearchTerm: () => {
  }
});

export default SearchTermContext;