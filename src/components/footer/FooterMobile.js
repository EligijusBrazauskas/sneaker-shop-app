import classes from '../../assets/scss/footer/footer-mobile.module.scss'
import LinkBase from '../UI/LinkBase';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from '../../router/routes';

const FooterMobile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navigateHome = () => {
    if (location.pathname !== routes.home) {
      navigate(routes.home, { replace: true })
    }
  }

  const navigateCart = () => {
    if (location.pathname !== routes.cart) {
      navigate(routes.cart, { replace: true })
    }
  }

  return (
    <div className={ classes.footer_mobile }>
      <LinkBase icon={ 'home' } click={ navigateHome }/>
      <LinkBase icon={ 'heart' } click={ navigateHome }/>
      <LinkBase icon={ 'cart' } click={ navigateCart }/>
    </div>
  )
}

export default FooterMobile;