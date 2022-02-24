import { createGlobalStyle } from 'styled-components';
import { lightGrayText } from '../variables';

export const GlobalStyles = createGlobalStyle`
  .App {
    font-family: 'Inter', sans-serif;
  }
  
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
  
  .h2_small {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.1;
  }

  .h2_white {
    font-size: 20px;
    font-weight: 700;
    color: white;
    letter-spacing: 1.2px;
  }

  .h2_bold_smaller {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    color: ${ lightGrayText };
    font-weight: 400;
  }

  .full_price {
    color: ${ lightGrayText };
    font-weight: 400;
    text-decoration: line-through;
  }

  .p_smaller {
    font-size: 14px;
  }

  .p_smallest {
    font-size: 12px;
    text-decoration: line-through;
  }

  button {
    border: none;
  }

  span {
    font-weight: 700;
  }
  
  .span-light {
    font-weight: 400;
    font-size: 14px;
  }

  .button-icon {
    font-size: 16px;
  }
  
  .button-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
