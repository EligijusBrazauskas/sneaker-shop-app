import React, { useContext } from 'react';
import { MainLayoutWrapper } from '../assets/styles/layouts/MainLayoutWrapper';
import HomeView from '../views/HomeView';
import NavigationMobile from '../components/navigation/NavigationMobile';
import NavigationDesktop from '../components/navigation/NavigationDesktop';
import windowWidthContext from '../shared/context/window-width/window-width-context';
import FooterMobile from '../components/footer/FooterMobile';
import FooterDesktop from '../components/footer/FooterDesktop';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../shared/router/routes';
import WishListView from '../views/WishlistView';
import CartView from '../views/CartView';
import ProductView from '../views/ProductView';
import {
  searchVisibilityDesktop,
  searchVisibilityMobile,
} from '../shared/helpers/search-input/search-visibility-deriver';

const MainLayout = () => {
  const windowWidthCtx = useContext(windowWidthContext);
  const location = useLocation();

  const path = location.pathname;
  const isMobile = windowWidthCtx.width < 768;

  const isSearchVisible = searchVisibilityDesktop(path);
  const isSearchIsVisibleMobile = searchVisibilityMobile(path);

  return (
    <MainLayoutWrapper>
      { isMobile && isSearchIsVisibleMobile && <NavigationMobile/> }
      { !isMobile && <NavigationDesktop isSearchVisible={ isSearchVisible }/> }
      <Routes>
        <Route path={ routes.home } element={ <HomeView/> }/>
        <Route path={ routes.wishlist } element={ <WishListView/> }/>
        <Route path={ routes.cart } element={ <CartView/> }/>
        <Route path={ `${ routes.products }:product` } element={ <ProductView/> }/>
      </Routes>
      { isMobile ? <FooterMobile/> : <FooterDesktop/> }
    </MainLayoutWrapper>
  );
};

export default MainLayout;