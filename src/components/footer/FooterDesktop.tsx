import React from "react";
import Logo from "../common/Logo";
import { FooterDesktopWrapper } from "../../assets/styles/footer/FooterDesktopWrapper";

const FooterDesktop = () => {
  return (
    <FooterDesktopWrapper>
      <Logo/>
      <p>2022</p>
    </FooterDesktopWrapper>
  );
};

export default FooterDesktop;