import React, { useContext, useState } from "react";
import ProductModel from "../../models/product";
import SearchTermContext from "../search/search-term-context";
import FilteredProductsContext from "./filtered-products-context";
import SearchedProductsContext from "./searched-products-context";

const SearchedProductsProvider = ({ children }: any) => {

  const [searchedProducts, setSearchedProducts] = useState<ProductModel[]>([]);

  const searchTermCtx = useContext(SearchTermContext);
  const filteredProductsCtx = useContext(FilteredProductsContext);

  const searchTerm = searchTermCtx.searchTerm;
  const filteredProducts = filteredProductsCtx.filteredProducts;

  const filterBySearchTermHandler = (): void => {
    if (searchTerm !== '') {
      const searchResults = filteredProducts.filter(product => {
        return product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase());
      });
      setSearchedProducts(searchResults);
    } else {
      setSearchedProducts(filteredProducts);
    }
  };

  const searchedProductsContext = {
    searchedProducts,
    filterBySearchTerm: filterBySearchTermHandler
  };

  return (
    <SearchedProductsContext.Provider value={ searchedProductsContext }>
      { children }
    </SearchedProductsContext.Provider>
  );
};

export default SearchedProductsProvider;