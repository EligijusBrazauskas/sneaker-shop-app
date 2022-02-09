import classes from '../assets/scss/views/cart-view.module.scss';
import ButtonBase from "../components/UI/ButtonBase";
import { FiArrowLeft } from "react-icons/fi";
import ProductsList from "../components/products/ProductsList";
import { routes } from "../router/routes";
import { useNavigate } from "react-router-dom";

const CartView = () => {

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(routes.home, { replace: true })
  }

  return (
    <div className={ classes.cart_view }>
      <div className={ classes.header }>
        <ButtonBase isSecondaryRoundWhite={ true } isBigger={ true } onClick={ navigateHome }>
          <FiArrowLeft/>
        </ButtonBase>
        <h1>My Cart</h1>
        <div className={ classes.placeholder }>
        </div>
      </div>
      <ProductsList />
    </div>
  )
}

export default CartView;