import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '../shared/router/routes';
import ButtonBase from '../components/common/ButtonBase';
import { FiArrowLeft } from 'react-icons/fi';
import { CartViewWrapper } from '../assets/styles/views/CartViewWrapper';
import CartContext from '../shared/context/cart/cart-context';
import CartItemModel from '../shared/models/cart-item';
import CartItem from '../components/cart/CartItem';
import NoResults from '../components/common/NoResults';
import { RiShoppingCartLine } from 'react-icons/ri';

const CartView = () => {
  const cartCtx = useContext(CartContext);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(`${ routes.main }${ routes.home }`, { replace: true });
  };

  const cartItemAddHandler = (item: CartItemModel): void => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id: any): void => {
    cartCtx.removeItem(id);
  };

  const cartItems: CartItemModel[] = cartCtx.items;
  const cartTotalPrice: string = cartCtx.totalAmount.toFixed(2);

  return (
    <CartViewWrapper cartLength={ cartItems.length }>
      <div>
        <div className='header'>
          <ButtonBase
            backgroundColor={ 'white' }
            onClick={ navigateHome }
            borderLighter
          >
            <FiArrowLeft className={ 'button-icon' }/>
          </ButtonBase>
          <h1>My Cart</h1>
          <div className='placeholder'></div>
        </div>
        { cartItems.length > 0 ? (
          <div className='cart-items-list'>
            { cartItems.map((item) => {
              return (
                <CartItem
                  item={ item }
                  key={ item.id }
                  onAdd={ cartItemAddHandler }
                  onRemove={ cartItemRemoveHandler }
                />
              );
            }) }
          </div>
        ) : (
          <NoResults title='Your cart is empty!'>
            <RiShoppingCartLine/>
          </NoResults>
        ) }
      </div>
      { cartItems.length > 0 && (
        <div className='bottom-section'>
          <div className='total'>
            <h2>Total</h2>
            <h1>${ cartTotalPrice }</h1>
          </div>
          <ButtonBase backgroundColor='orange-primary'>
            <span>Buy Now</span>
          </ButtonBase>
        </div>
      ) }
    </CartViewWrapper>
  );
};

export default CartView;