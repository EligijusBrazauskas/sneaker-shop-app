import React from 'react';
import ProductModel from '../../models/product';

interface wishListContextInterface {
  items: ProductModel[];
  toggleItem: (item: ProductModel) => void;
  loadItems: () => void;
}

const WishListContext = React.createContext<wishListContextInterface>({
  items: [],
  toggleItem: (item) => {
  },
  loadItems: () => {
  }
});

export default WishListContext;