import React from "react";
import ProductModel from "../../models/product";

interface searchedProductsContextInterface {
  searchedProducts: ProductModel[],
  filterBySearchTerm: () => void
}

const SearchedProductsContext = React.createContext<searchedProductsContextInterface>({
  searchedProducts: [],
  filterBySearchTerm: () => {
  }
});

export default SearchedProductsContext;