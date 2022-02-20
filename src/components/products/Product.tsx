import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from "../../shared/router/routes";
import ButtonBase from "../common/ButtonBase";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import ProductModel from "../../models/product";
import { discountedPrice } from "../../helpers/discount-calculator";
import { ProductWrapper } from "../../assets/styles/products/ProductWrapper";
import WishListContext from "../../context/wishlist/wishlist-context";

type Props = {
  product: ProductModel,
}

const Product = ({ product }: Props) => {

  const navigate = useNavigate();

  const wishlistCtx = useContext(WishListContext);

  const navigateToProduct = () => {
    navigate(`${ routes.main }${ routes.products }${ product.id }`);
  };

  const toggleWishListed = (event: any) => {
    event.stopPropagation();
    wishlistCtx.toggleItem(product);
  };

  const productIsInWishList = (): boolean => {
    const items = wishlistCtx.items;
    const itemMatch = items.find(item => item.id === product.id);
    return itemMatch !== undefined;
  };

  const discount = discountedPrice(product);

  return (
    <ProductWrapper onClick={ navigateToProduct }>
      <div className="top">
        <ButtonBase backgroundColor={ 'white' } borderRadius={ '24px' }>
          <span>{ product.discountPercentage }% OFF</span>
        </ButtonBase>
        <div onClick={ toggleWishListed } className="heart">
          {
            productIsInWishList() ?
              <FaHeart className="heart-full"/> :
              <FiHeart/>
          }
        </div>
      </div>
      <div className="image-container">
        <img src={ require(`../../assets/images/products/${ product.image }.jpeg`) } alt=""/>
      </div>
      <div className="bottom">
        <p className="p_smaller">{ product.title }</p>
        <div className="prices">
          <h2 className="h2_bold_smaller">${ discount.toFixed(2) }</h2>
          <p className="p_smallest">${ product.price }</p>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;