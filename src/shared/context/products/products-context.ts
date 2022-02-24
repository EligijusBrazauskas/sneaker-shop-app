import React from 'react';
import ProductModel from '../../models/product';

interface ProductsContextInterface {
  products: ProductModel[];
  storeProducts: (products: ProductModel[]) => void;
}

const ProductsContext = React.createContext<ProductsContextInterface>({
  products: [],
  storeProducts: () => {},
});

export default ProductsContext;
