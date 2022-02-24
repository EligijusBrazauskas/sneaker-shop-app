import { useCallback, useEffect, useState } from 'react';

export const useAddedToCartTimer = () => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const toggleAddedToCart = useCallback((value: boolean) => {
    setAddedToCart(value);
  }, []);

  useEffect(() => {
    const addedToCartTimeout = setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
    clearTimeout(addedToCartTimeout);

    return () => {
      clearTimeout(addedToCartTimeout);
      toggleAddedToCart(false);
    };
  }, [toggleAddedToCart]);

  return { addedToCart, toggleAddedToCart };
};

