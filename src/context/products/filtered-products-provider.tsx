import React, { useState } from "react";
import ProductModel from "../../models/product";
import FilteredProductsContext from "./filtered-products-context";

const FilteredProductsProvider = ({ children }: any) => {

  const [filteredProducts, setFilteredProducts] = useState<ProductModel[]>([]);

  const getFilteredProductsHandler = (products: ProductModel[]): void => {
    setFilteredProducts(products);
  };

  const filterByAllHandler = (products: ProductModel[]): void => {
    setFilteredProducts(products);
  };

  const filterByAdidasHandler = (products: ProductModel[]): void => {
    const newArr = products.filter(item => item.brand === 'adidas');
    setFilteredProducts(newArr);
  };

  const filterByNikeHandler = (products: ProductModel[]): void => {
    const newArr = products.filter(item => item.brand === 'nike');
    setFilteredProducts(newArr);
  };

  const filterByNewBalanceHandler = (products: ProductModel[]): void => {
    const newArr = products.filter(item => item.brand === 'new_balance');
    setFilteredProducts(newArr);
  };

  const filteredProductsContext = {
    filteredProducts,
    getFilteredProducts: getFilteredProductsHandler,
    filterByAll: filterByAllHandler,
    filterByNike: filterByNikeHandler,
    filterByAdidas: filterByAdidasHandler,
    filterByNewBalance: filterByNewBalanceHandler
  };

  return (
    <FilteredProductsContext.Provider value={ filteredProductsContext }>
      { children }
    </FilteredProductsContext.Provider>
  );
};

export default FilteredProductsProvider;