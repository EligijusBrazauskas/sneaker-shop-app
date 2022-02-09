import classes from '../../assets/scss/products/product.module.scss'
import ButtonBase from "../UI/ButtonBase";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { routes } from "../../router/routes";

const Product = ({ product }) => {

  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate(`${routes.products}${ product.id }`)
  }

  const currentPhoto = () => {
    switch (product.brand) {
      case 'nike':
        return;
      case 'adidas':
        return classes.adidas;
      case 'esprit':
        return classes.esprit;
      default:
        return;
    }
  }

  const discountedPrice = () => {
    const fullPrice = product.price;
    const percentage = product.discountPercentage;

    const newPrice = fullPrice - (fullPrice * ('.' + percentage))
    return +newPrice;
  }

  return (
    <div className={ classes.product } onClick={ navigateToProduct }>
      <div className={ classes.top }>
        <ButtonBase isSecondaryRoundWhite={ true }>
          <span>{ product.discountPercentage }% OFF</span>
        </ButtonBase>
        <div className={ classes.heart }>
          <FiHeart/>
        </div>
      </div>
      <div className={ `${ classes.image_container } ${ currentPhoto() }` }>
        <img src={ require(`../../assets/images/products/${ product.image }.jpeg`) } alt=""/>
      </div>
      <div className={ classes.bottom }>
        <p className='p_smaller'>{ product.title }</p>
        <div className={ classes.prices }>
          <h2 className='h2_bold_smaller'>${ discountedPrice() }</h2>
          <p className='p_smallest'>${ product.price }</p>
        </div>
      </div>
    </div>
  )
}

export default Product;