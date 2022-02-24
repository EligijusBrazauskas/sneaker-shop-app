import styled from 'styled-components';
import { lightGrayHover, orangeSecondary } from '../variables';

export const CartItemWrapper = styled.div`
  display: flex;
  background-color: white;
  border: 2px solid ${ lightGrayHover };
  padding: 10px;
  border-radius: 18px;
  gap: 12px;
  
  .left-side {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    
    .image-container {
      background-color: ${ orangeSecondary };
      border-radius: 24px;
      padding: 10px;
      min-width: 30px;
      max-height: 150px;
      max-width: 300px;
      cursor: pointer;
      
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  
  .right-side {
    flex-basis: 100%;
    display: flex;
    align-items: center;
    
    .title-price-counter {
      display: flex;
      flex-direction: column;
      justify-content: center
      height: 100%;
      width: 100%;
      gap: 4px;
      text-align: center;
      
      @media (min-width: 380px) {
        gap: 26px;
        text-align: initial;
      }
      
      .price-counter {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        flex-direction: column;
        
        @media (min-width: 350px) {
          flex-direction: row;        
        }
        
        h1 {
          font-size: 18px;
        }
      }
    }
  }
`;
