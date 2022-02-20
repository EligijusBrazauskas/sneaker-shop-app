import React from "react";
import { ReactComponent as LogoIcon } from '../../assets/svg/sneaky.svg';
import { useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../shared/router/routes";
import { LogoWrapper } from "../../assets/styles/common/LogoWrapper";

const Logo = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const navigateHome = (): void => {
    if (location.pathname !== routes.home) {
      navigate(routes.home, { replace: true });
    }
  };

  return (
    <LogoWrapper onClick={ navigateHome }>
      <LogoIcon/>
    </LogoWrapper>
  );
};

export default Logo;