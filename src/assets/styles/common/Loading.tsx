import styled, { keyframes } from "styled-components";
import { orangePrimary } from "../variables";

type Props = {
  className?: string;
  screenHeight?: boolean;
  isMobile?: boolean;
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const Loading = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${ (props) =>
    props.isMobile ? "calc(100vh - 80px)" : "calc(100vh - 160px)" };

  .spinner {
    width: 100px;
    height: 100px;
    border: 10px ${ orangePrimary } solid;
    border-bottom-color: white;
    border-top-color: white;
    border-radius: 50%;
    animation: 1s ease-in-out infinite ${ spin };
    display: flex;
    justify-content: center;
    align-items: center;

    .spinner_inner {
      width: 70px;
      height: 70px;
      border: 10px ${ orangePrimary } solid;
      border-bottom-color: white;
      border-top-color: white;
      border-radius: 50%;
      animation: 2s ease-in-out infinite ${ spin };
    }
  }
`;
