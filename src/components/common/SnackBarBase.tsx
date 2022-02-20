import React, { useCallback, useEffect, useState } from 'react';
import ButtonBase from "./ButtonBase";
import { FiAlertCircle, FiArrowRight, FiCheck } from "react-icons/fi";
import { SnackBar } from "../../assets/styles/common/SnackBar";

type Props = {
  children: any,
  imageType: string,
  error?: boolean,
  success?: boolean,
  clearAddedToCart?: any
}

const SnackBarBase = ({ children, imageType, error, success, clearAddedToCart }: Props) => {

  const [snackbarIsShown, setSnackbarIsShown] = useState(false);

  const currentImage = (): any => {
    switch (imageType) {
      case 'error':
        return <FiAlertCircle className="image"/>;
      case 'success':
        return <FiCheck className="image"/>;
      default:
        return;
    }
  };

  const closeSnackbar = useCallback(() => {
    setSnackbarIsShown(false);
    clearAddedToCart(false);
  }, [clearAddedToCart]);

  const showSnackbar = useCallback(() => {
    if (error || success) {
      setSnackbarIsShown(true);
    }
  }, [error, success]);

  useEffect(() => {
    showSnackbar();
    const snackbarTimeout = setTimeout(() => {
      setSnackbarIsShown(false);
      closeSnackbar();
    }, 3000);
    return () => {
      clearTimeout(snackbarTimeout);
      closeSnackbar();
    };
  }, [closeSnackbar, showSnackbar]);

  return (
    <SnackBar className={ snackbarIsShown ? 'visible' : 'hidden' }>
      <div className="snackbar_left_side">
        { currentImage() }
        { children }
      </div>
      <ButtonBase color={ 'gray-darker' } onClick={ closeSnackbar }>
        <FiArrowRight className={ 'button-icon' }/>
      </ButtonBase>
    </SnackBar>
  );
};

export default SnackBarBase;