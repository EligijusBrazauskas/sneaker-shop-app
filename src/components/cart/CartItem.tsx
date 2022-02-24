import React from 'react';
import CartItemModel from '../../shared/models/cart-item';
import { CartItemWrapper } from '../../assets/styles/cart/CartItemWrapper';
import { discountedPrice } from '../../shared/helpers/discount-calculator';
import Counter from './Counter';
import { routes } from '../../shared/router/routes';
import { useNavigate } from 'react-router-dom';

type Props = {
  item: CartItemModel;
  onAdd: (item: CartItemModel) => void;
  onRemove: (id: any) => void;
};

const CartItem = ({ item, onAdd, onRemove }: Props) => {

  const discount = discountedPrice(item);

  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`${ routes.main }${ routes.products }${ item.id }`);
  };

  return (
    <CartItemWrapper>
      <div className="left-side">
        <div onClick={ navigateToProduct } className="image-container">
          <img src={ require(`../../assets/images/products/${ item.image }.jpeg`) } alt=""/>
        </div>
      </div>
      <div className="right-side">
        <div className="title-price-counter">
          <h2 className="h2_small">{ item.title }</h2>
          <div className="price-counter">
            <h1>${ discount.toFixed(2) }</h1>
            <Counter
              amount={ item.amount }
              id={ item.id }
              onAdd={ () => onAdd(item) }
              onRemove={ () => onRemove(item.id) }/>
          </div>
        </div>
      </div>
    </CartItemWrapper>
  );
};

export default CartItem;