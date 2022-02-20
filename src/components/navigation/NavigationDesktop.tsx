import React, { ChangeEvent, useContext } from 'react';
import ButtonBase from "../common/ButtonBase";
import { MdClose } from "react-icons/md";
import { NavigationDesktopWrapper } from "../../assets/styles/navigation/NavigationDesktopWrapper";
import LinkBase from "../common/LinkBase";
import CartContext from "../../context/cart/cart-context";
import { routes } from "../../shared/router/routes";
import { useLocation, useNavigate } from "react-router-dom";
import searchTermContext from "../../context/search/search-term-context";
import searchedProductsContext from "../../context/products/searched-products-context";
import Logo from "../common/Logo";

type Props = {
  isSearchVisible?: boolean
}

const NavigationDesktop = ({ isSearchVisible }: Props) => {

  const location = useLocation();
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

  const searchTermCtx = useContext(searchTermContext);
  const searchedProductsCtx = useContext(searchedProductsContext);

  const updateSearchTerm = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    searchTermCtx.setSearchTerm(target.value);
    searchedProductsCtx.filterBySearchTerm();
  };

  const clearSearch = (): void => {
    searchTermCtx.clearSearchTerm();
    searchTermCtx.clearSearchTerm();
  };

  const navigateHome = (): void => {
    if (location.pathname !== `${ routes.main }${ routes.home }`) {
      navigate(`${ routes.main }${ routes.home }`, { replace: true });
    }
  };

  const navigateCart = (): void => {
    if (location.pathname !== `${ routes.main }${ routes.cart }`) {
      navigate(`${ routes.main }${ routes.cart }`, { replace: true });
    }
  };

  const navigateWishlist = (): void => {
    if (location.pathname !== `${ routes.main }${ routes.wishlist }`) {
      navigate(`${ routes.main }${ routes.wishlist }`, { replace: true });
    }
  };

  const activeLink = (): string => {
    switch (location.pathname) {
      case `${ routes.main }${ routes.home }`:
        return 'home';
      case `${ routes.main }${ routes.wishlist }`:
        return 'wishlist';
      case `${ routes.main }${ routes.cart }`:
        return 'cart';
      default:
        return '';
    }
  };

  const numberOfCartItems = cartCtx.items.reduce((currVal, item) => {
    return currVal + item.amount;
  }, 0);


  return (
    <NavigationDesktopWrapper isSearchVisible={ isSearchVisible }>
      <div className="search-input-wrapper">
        <input
          className="search"
          type="search"
          placeholder="What are you looking for?"
          onChange={ updateSearchTerm }
          value={ searchTermCtx.searchTerm }
        />
        <ButtonBase backgroundColor={ 'white' } borderLighter={ true } onClick={ clearSearch }>
          <MdClose className="button-icon"/>
        </ButtonBase>
      </div>
      <Logo/>
      <div className="links">
        <LinkBase icon={ 'home' } click={ navigateHome } active={ activeLink() === 'home' }/>
        <LinkBase icon={ 'heart' } click={ navigateWishlist } active={ activeLink() === 'wishlist' }/>
        <LinkBase icon={ 'cart' } click={ navigateCart } active={ activeLink() === 'cart' }>
          <span className="cart-counter">{ numberOfCartItems }</span>
        </LinkBase>
      </div>
    </NavigationDesktopWrapper>
  );
};

export default NavigationDesktop;