import WishlistContext from './wishlist-context';
import React, { useEffect, useReducer } from 'react';
import ProductModel from '../../models/product';

interface wishlistStateInterface {
  items: ProductModel[];
}

const defaultWishListState: wishlistStateInterface = {
  items: []
};

const wishListReducer = (state: wishlistStateInterface, action: any) => {

  if (action.type === 'TOGGLE_ITEM') {

    const existingWishListItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingWishListItem = state.items[existingWishListItemIndex];

    let updatedItems;

    if (existingWishListItem) {
      updatedItems = state.items.filter(item => item.id !== action.item.id);
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem('wishlist', JSON.stringify(updatedItems));

    return {
      items: updatedItems
    };
  }

  if (action.type === 'LOAD_ITEMS') {

    let storedItems;

    storedItems = JSON.parse(localStorage.getItem('wishlist') || '[]');

    return {
      items: storedItems
    };
  }

  return defaultWishListState;
};

const WishlistProvider = ({ children }: any) => {
  const [wishListState, dispatchWishListAction] = useReducer(wishListReducer, defaultWishListState);

  const toggleItemFromWishListHandler = (item: ProductModel) => {
    dispatchWishListAction({ type: 'TOGGLE_ITEM', item });
  };

  const loadItemsToWishlistHandler = () => {
    dispatchWishListAction({ type: 'LOAD_ITEMS' });
  };

  const wishListContext = {
    items: wishListState.items,
    toggleItem: toggleItemFromWishListHandler,
    loadItems: loadItemsToWishlistHandler
  };

  useEffect(() => {
    loadItemsToWishlistHandler();
  }, []);

  return (
    <WishlistContext.Provider value={ wishListContext }>
      { children }
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;