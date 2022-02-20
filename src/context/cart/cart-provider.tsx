import CartContext from "./cart-context";
import React, { useEffect, useReducer } from "react";
import CartItemModel from "../../models/cart-item";
import { discountedPrice } from "../../helpers/discount-calculator";

interface cartStateInterface {
  items: CartItemModel[],
  totalAmount: number
}

const defaultCartState: cartStateInterface = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state: cartStateInterface, action: any) => {
  if (action.type === 'ADD_ITEM') {
    const discount = discountedPrice(action.item);

    const updatedTotalAmount = state.totalAmount + discount * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    localStorage.setItem('cart', JSON.stringify(updatedItems));
    localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];

    const discount = discountedPrice(state.items[existingCartItemIndex]);

    const updatedTotalAmount = state.totalAmount - discount;

    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    localStorage.setItem('cart', JSON.stringify(updatedItems));
    localStorage.setItem('totalAmount', JSON.stringify(updatedTotalAmount));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  if (action.type === 'LOAD_CART') {

    let storedItems;
    let storedAmount;

    storedItems = JSON.parse(localStorage.getItem('cart') || '[]');
    storedAmount = JSON.parse(localStorage.getItem('totalAmount') || '0');

    return {
      items: storedItems,
      totalAmount: storedAmount
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }: any) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item: CartItemModel) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };

  const removeItemFromCartHandler = (id: any) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };

  const loadItemsToCartHandler = () => {
    dispatchCartAction({ type: 'LOAD_CART' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    loadItems: loadItemsToCartHandler
  };

  useEffect(() => {
    loadItemsToCartHandler();
  }, []);

  return (
    <CartContext.Provider value={ cartContext }>
      { children }
    </CartContext.Provider>
  );
};

export default CartProvider;