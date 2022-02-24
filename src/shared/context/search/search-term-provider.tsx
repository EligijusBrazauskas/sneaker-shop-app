import SearchTermContext from './search-term-context';
import React, { useState } from 'react';

const SearchTermProvider = ({ children }: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchTermSetHandler = (term: string): void => {
    setSearchTerm(term);
  };

  const searchTermClearHandler = (): void => {
    setSearchTerm('');
  };

  const searchTermContext = {
    searchTerm,
    setSearchTerm: searchTermSetHandler,
    clearSearchTerm: searchTermClearHandler,
  };

  return (
    <SearchTermContext.Provider value={ searchTermContext }>
      { children }
    </SearchTermContext.Provider>
  );
};

export default SearchTermProvider;