import styled, { keyframes } from 'styled-components';
import { lightGrayHover, orangePrimary } from '../variables';

type Props = {
  error?: boolean;
  success?: boolean;
};

const fadeIn = keyframes`
  from {
    left: -30px;
    opacity: 0;
  }
  to {
    left: 20px;
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    left: 20px;
    opacity: 1;
   
  }
  to {
    left: -30px;
    opacity: 0;
  }
`;

export const SnackBar = styled.div<Props>`
  justify-content: space-between;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  background-color: white;
  border-radius: 12px;
  z-index: 301;
  border: 1px solid ${ lightGrayHover };
  position: fixed;
  bottom: 100px;

  .snackbar_left_side {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    .image {
      font-size: 26px;
      color: ${ orangePrimary };
    }
  }
  
  &.visible {
    left: 20px;
    visibility: visible;
    animation: ${ fadeIn } 500ms, ${ fadeOut } 500ms 2500ms;
  }
  
  &.hidden {
    visibility: hidden;
  }
`;