import CartProvider from './cart/cart-provider';
import WishlistProvider from './wishlist/wishlist-provider';
import WindowWidthProvider from './window-width/window-width-provider';
import SearchTermProvider from './search/search-term-provider';
import FilteredProductsProvider from './products/filtered-products-provider';
import SearchedProductsProvider from './products/searched-products-provider';

import React from 'react';
import ProductsProvider from './products/products-provider';

const Providers = ({ children }: any) => {
  return (
    <CartProvider>
      <WishlistProvider>
        <WindowWidthProvider>
          <SearchTermProvider>
            <FilteredProductsProvider>
              <SearchedProductsProvider>
                <ProductsProvider>{ children }</ProductsProvider>
              </SearchedProductsProvider>
            </FilteredProductsProvider>
          </SearchTermProvider>
        </WindowWidthProvider>
      </WishlistProvider>
    </CartProvider>
  );
};

export default Providers;