import React from 'react';
import CartItemModel from '../../models/cart-item';

interface cartContextInterface {
  items: CartItemModel[];
  totalAmount: number;
  addItem: (item: CartItemModel) => void;
  removeItem: (id: any) => void;
  loadItems: () => void;
}

const CartContext = React.createContext<cartContextInterface>({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  loadItems: () => {},
});

export default CartContext;
