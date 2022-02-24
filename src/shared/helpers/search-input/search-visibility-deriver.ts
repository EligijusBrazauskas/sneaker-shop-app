import { routes } from '../../router/routes';

export const searchVisibilityDesktop = (path: any) => {
  if (path === `${ routes.main }${ routes.home }`) {
    return true;
  }
  if (path === `${ routes.main }${ routes.wishlist }`) {
    return false;
  }
  if (path === `${ routes.main }${ routes.cart }`) {
    return false;
  } else return false;
};

export const searchVisibilityMobile = (path: any) => {
  if (path === `${ routes.main }${ routes.home }`) {
    return true;
  }
  if (path !== `${ routes.main }${ routes.wishlist }`) {
    return false;
  }
  if (path !== `${ routes.main }${ routes.cart }`) {
    return false;
  } else return false;
};