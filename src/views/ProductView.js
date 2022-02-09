import classes from '../assets/scss/views/product-view.module.scss';
import ButtonBase from "../components/UI/ButtonBase";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { routes } from "../router/routes";
import LoadingBase from "../components/UI/LoadingBase";
import SnackBarBase from "../components/UI/SnackBarBase";
import { useEffect, useState } from "react";
import RatingBase from "../components/UI/RatingBase";

const ProductView = () => {

  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const navigateHome = () => {
    navigate(routes.home, { replace: true })
  }

  const getProduct = () => {
    setLoading(true)
    return fetch(`/products/${ +params.product }`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          clearError();
        }, 5000)
        setLoading(false)
      })
  }

  const clearError = () => {
    setError(false);
  }

  const discountedPrice = () => {
    const fullPrice = product.price;
    const percentage = product.discountPercentage;

    const newPrice = fullPrice - (fullPrice * ('.' + percentage))
    return +newPrice;
  }

  useEffect(() => {
    clearError();
    getProduct();
  }, [])

  if (loading) return <LoadingBase height={ 'screen' }/>;

  return (
    <div className={ classes.product_view }>
      <div className={ classes.product_view_top }>
        <div className={ classes.header }>
          <ButtonBase isSecondaryRoundWhite={ true } isBigger={ true } onClick={ navigateHome }>
            <FiArrowLeft/>
          </ButtonBase>
        </div>
        <div className={ classes.image_container }>
          {
            product.image ? <img src={ require(`../assets/images/products/${ product.image }.jpeg`) } alt=""/> : null
          }
        </div>
      </div>
      <div className={ classes.content_separator }>
        <div className={ classes.product_view_bottom }>
          <h2>{ product.title }</h2>
          <div className={ classes.rating_reviews_group }>
            <div>
              <RatingBase rating={ product.averageRating }/>
            </div>
            <span className={ classes.reviews }>({ product.reviewsAmount } Reviews)</span>
          </div>
          <div className={ classes.price_available_group }>
            <div className={ classes.prices_group }>
              <h1>${ discountedPrice() }</h1>
              <p className='full_price'>${ product.price }</p>
            </div>
            <span className={ classes.stock }>{ product.stockAmount > 0 ? 'Available in' : 'Out of' } stock</span>
          </div>
          <div className={ classes.about }>
            <h2>About</h2>
            <p>{ product.description }</p>
          </div>
        </div>
        {
          error ?
            <SnackBarBase imageType={ 'error' } error={ error } clearError={ error }>
              <span>Something went wrong, try again...</span>
            </SnackBarBase> : ''
        }
        <ButtonBase isPrimaryOrange={ true }><span>Add to cart</span></ButtonBase>
      </div>
    </div>
  )
}

export default ProductView;