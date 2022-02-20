import React from "react";
import ProductModel from "../../models/product";

interface filteredProductsContextInterface {
  filteredProducts: ProductModel[],
  getFilteredProducts: (products: ProductModel[]) => void,
  filterByAll: (products: ProductModel[]) => void,
  filterByNike: (products: ProductModel[]) => void,
  filterByAdidas: (products: ProductModel[]) => void,
  filterByNewBalance: (products: ProductModel[]) => void,
}

const FilteredProductsContext = React.createContext<filteredProductsContextInterface>({
  filteredProducts: [],
  getFilteredProducts: () => {
  },
  filterByAll: () => {
  },
  filterByNike: () => {
  },
  filterByAdidas: () => {
  },
  filterByNewBalance: () => {
  }
});

export default FilteredProductsContext;