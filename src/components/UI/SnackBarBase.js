import classes from '../../assets/scss/UI/snackbar-base.module.scss';
import ButtonBase from "./ButtonBase";
import { FiAlertCircle } from "react-icons/fi";
import { FiCheck } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";

const SnackBarBase = ({ children, imageType, error, clearError }) => {

  const currentImage = () => {
    switch (imageType) {
      case 'error':
        return <FiAlertCircle className={ classes.image }/>;
      case 'success':
        return <FiCheck className={ classes.image }/>;
      default:
        return;
    }
  }

  return (
    <div className={ `${ classes.snackbar_base } ${ error ? classes.show : '' }` }>
      <div className={ classes.snackbar_left_side }>
        { currentImage() }
        { children }
      </div>
      <ButtonBase isSecondaryDarker={ true } onClick={ () => clearError() }>
        <FiArrowRight/>
      </ButtonBase>
    </div>
  )
}

export default SnackBarBase;