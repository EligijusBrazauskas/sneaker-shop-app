import React, { useContext } from "react";
import CartContext from "../../context/cart/cart-context";
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../shared/router/routes';
import LinkBase from '../common/LinkBase';
import { FooterMobileWrapper } from "../../assets/styles/footer/FooterWrapper";

const FooterMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);

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
        return 'home';
    }
  };

  const numberOfCartItems = cartCtx.items.reduce((currVal, item) => {
    return currVal + item.amount;
  }, 0);

  return (
    <FooterMobileWrapper>
      <LinkBase icon={ 'home' } click={ navigateHome } active={ activeLink() === 'home' }/>
      <LinkBase icon={ 'heart' } click={ navigateWishlist } active={ activeLink() === 'wishlist' }/>
      <LinkBase icon={ 'cart' } click={ navigateCart } active={ activeLink() === 'cart' }>
        <span className="cart-counter">{ numberOfCartItems }</span>
      </LinkBase>
    </FooterMobileWrapper>
  );

};

export default FooterMobile;