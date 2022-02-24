import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../shared/router/routes';
import { FiArrowLeft } from 'react-icons/fi';
import { RiHeartAddLine } from 'react-icons/ri';
import ButtonBase from '../components/common/ButtonBase';
import ProductModel from '../shared/models/product';
import ProductsList from '../components/products/ProductsList';
import { WishListWrapper } from '../assets/styles/views/WishListWrapper';
import WishListContext from '../shared/context/wishlist/wishlist-context';
import NoResults from '../components/common/NoResults';

const WishListView = () => {
  const wishlistCtx = useContext(WishListContext);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(`${ routes.main }${ routes.home }`, { replace: true });
  };

  const wishListItems: ProductModel[] = wishlistCtx.items;

  return (
    <WishListWrapper>
      <div>
        <div className='header'>
          <ButtonBase
            backgroundColor={ 'white' }
            onClick={ navigateHome }
            borderLighter
          >
            <FiArrowLeft className={ 'button-icon' }/>
          </ButtonBase>
          <h1>My Wishlist</h1>
          <div className='placeholder'></div>
        </div>
        { wishListItems.length > 0 ? (
          <ProductsList products={ wishListItems }/>
        ) : (
          <NoResults title='Your wishlist is empty!'>
            <RiHeartAddLine/>
          </NoResults>
        ) }
      </div>
    </WishListWrapper>
  );
};

export default WishListView;