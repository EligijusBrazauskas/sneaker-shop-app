import React, { useState } from "react";
import ProductModel from "../../models/product";
import ProductsContext from "./products-context";

const ProductsProvider = ({ children }: any) => {

  const [products, setProducts] = useState<ProductModel[]>([]);

  const storeProductsHandler = (products: ProductModel[]) => {
    setProducts(products);
  };

  const productsContext = {
    products,
    storeProducts: storeProductsHandler
  };

  return (
    <ProductsContext.Provider value={ productsContext }>
      { children }
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;