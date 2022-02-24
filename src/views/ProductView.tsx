import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routes } from '../shared/router/routes';
import { discountedPrice } from '../shared/helpers/discount-calculator';
import { FiArrowLeft } from 'react-icons/fi';
import ButtonBase from '../components/common/ButtonBase';
import LoadingBase from '../components/common/LoadingBase';
import SnackBarBase from '../components/common/SnackBarBase';
import RatingBase from '../components/common/RatingBase';
import ProductModel from '../shared/models/product';
import { ProductViewWrapper } from '../assets/styles/views/ProductViewWrapper';
import CartContext from '../shared/context/cart/cart-context';
import { useAddedToCartTimer } from '../shared/hooks/use-added-to-cart-timer';
import { useHttp } from '../shared/hooks/use-http';
import windowWidthContext from '../shared/context/window-width/window-width-context';
import productsContext from '../shared/context/products/products-context';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const ProductView = () => {
  const [product, setProduct] = useState({} as ProductModel);
  const [isAtFirstPage, setIsAtFirstPage] = useState(false);
  const [isAtLastPage, setIsAtLastPage] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const widthCtx = useContext(windowWidthContext);
  const productsCtx = useContext(productsContext);

  const isMobile = widthCtx.width < 768;

  const { addedToCart, toggleAddedToCart } = useAddedToCartTimer();

  const applyProductData = useCallback((data: ProductModel) => {
    setProduct(data);
  }, []);

  const productRequestConfig = useMemo(() => {
    return {
      repositoryName: 'products',
      productParam: params.product,
    };
  }, [params.product]);

  const requestConfig = useMemo(() => {
    return {
      productsConfig: {
        repositoryName: 'products',
      },
    };
  }, []);

  const applyProductsData = useCallback((data: any) => {
    productsCtx.storeProducts(data);
  }, []);

  const { loading, error, getData } = useHttp(
    productRequestConfig,
    applyProductData
  );
  const { getData: getProducts } = useHttp(
    requestConfig.productsConfig,
    applyProductsData
  );

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    if (!addedToCart && product.stockAmount > 0) {
      toggleAddedToCart(true);

      const newItem = {
        id: product.id,
        title: product.title,
        brand: product.brand,
        image: product.image,
        price: product.price,
        discountPercentage: product.discountPercentage,
        amount: 1,
      };

      cartCtx.addItem(newItem);
    }
  };

  const navigateHome = (): void => {
    navigate(`${ routes.main }${ routes.home }`, { replace: true });
  };

  const navigateToNextProduct = (): void => {
    if (productsCtx.products.length !== product.id) {
      navigate(`${ routes.main }${ routes.products }${ +product.id + 1 }`);
      return;
    }
  };

  const navigateToPrevProduct = (): void => {
    if (+product.id > 1) {
      navigate(
        `${ routes.main }${ routes.products }${
          +product.id === 1 ? product.id : +product.id - 1
        }`
      );
      return;
    }
  };

  const checkCurrentPage = useCallback((): void => {
    if (+params.product! === 1) {
      setIsAtFirstPage(true);
      return;
    }

    if (
      +params.product! > 1 &&
      +params.product! < productsCtx.products.length
    ) {
      setIsAtFirstPage(false);
      setIsAtLastPage(false);
      return;
    }

    if (+params.product! === productsCtx.products.length) {
      setIsAtLastPage(true);
    }
  }, [params.product, productsCtx.products.length]);

  const discount = discountedPrice(product);

  useEffect(() => {
    getData();
    getProducts();
    checkCurrentPage();
  }, [checkCurrentPage, getData, getProducts]);

  if (loading) return <LoadingBase isMobile={ isMobile }/>;

  return (
    <ProductViewWrapper>
      <div className='product-view-top'>
        <div className='header'>
          <ButtonBase color='white' onClick={ navigateHome } border={ !isMobile }>
            <FiArrowLeft className='button-icon'/>
          </ButtonBase>
        </div>
        <div className='image-container'>
          { product.image ? (
            <img
              src={ require(`../assets/images/products/${ product.image }.jpeg`) }
              alt=''
            />
          ) : null }
        </div>
      </div>
      <div className='carousel-buttons-container'>
        <div className='carousel-buttons'>
          <ButtonBase
            onClick={ navigateToPrevProduct }
            backgroundColor='white'
            border
            round={ true }
            borderRadius='50%'
            isAtFirstPage={ isAtFirstPage }
          >
            <div className='button-icon-container'>
              <MdNavigateBefore className='button-icon'/>
            </div>
          </ButtonBase>
          <ButtonBase
            onClick={ navigateToNextProduct }
            backgroundColor='white'
            border
            round={ true }
            borderRadius='50%'
            isAtLastPage={ isAtLastPage }
          >
            <div className='button-icon-container'>
              <MdNavigateNext className='button-icon'/>
            </div>
          </ButtonBase>
        </div>
      </div>
      <div className='content-separator'>
        <div className='product-view-bottom'>
          <h2>{ product.title }</h2>
          <div className='rating-reviews-group'>
            <div>
              <RatingBase rating={ product.averageRating }/>
            </div>
            <span className='reviews'>({ product.reviewsAmount } Reviews)</span>
          </div>
          <div className='price-available-group'>
            <div className='prices-group'>
              <h1>${ discount }</h1>
              <p className='full_price'>${ product.price }</p>
            </div>
            <span className='stock'>
              { product.stockAmount > 0 ? 'In' : 'Out of' } stock{ ' ' }
              <span className='span-light'>({ product.stockAmount })</span>
            </span>
          </div>
          <div className='about'>
            <h2>About</h2>
            <p>{ product.description }</p>
          </div>
          { !isMobile && (
            <ButtonBase
              className='add-to-cart-button'
              onClick={ addToCartHandler }
              backgroundColor={
                addedToCart || product.stockAmount < 1
                  ? 'gray-darker'
                  : 'orange-primary'
              }
            >
              <span>
                { product.stockAmount > 0 ? 'Add to cart' : 'Unavailable' }
              </span>
            </ButtonBase>
          ) }
        </div>
        <div className='bottom-container'>
          { isMobile && (
            <ButtonBase
              onClick={ addToCartHandler }
              backgroundColor={
                addedToCart || product.stockAmount < 1
                  ? 'gray-darker'
                  : 'orange-primary'
              }
            >
              <span>
                { product.stockAmount > 0 ? 'Add to cart' : 'Unavailable' }
              </span>
            </ButtonBase>
          ) }
        </div>
        { error ? (
          <SnackBarBase imageType={ 'error' } error={ error }>
            <span>Something went wrong, try again...</span>
          </SnackBarBase>
        ) : (
          ''
        ) }
      </div>
      { addedToCart ? (
        <SnackBarBase
          imageType={ 'success' }
          success={ addedToCart }
          clearAddedToCart={ toggleAddedToCart }
        >
          <span>Successfully added to cart!</span>
        </SnackBarBase>
      ) : (
        ''
      ) }
    </ProductViewWrapper>
  );
};

export default ProductView;
