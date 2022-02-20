import styled from "styled-components";
import { orangePrimary } from "../variables";

type Props = {
  cartLength: number
}

export const CartViewWrapper = styled.div<Props>`
  min-height: calc(100vh - 80px);
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    min-height: calc(100vh - 160px);
    flex-direction: ${ props => props.cartLength > 0 ? 'row' : 'column ' };
    padding: 0 40px;
    gap: 12px;
  }
  
  @media (min-width: 1024px) {
    padding: 0 60px;
    justify-content:  ${ props => props.cartLength > 0 ? 'center' : 'start ' };
    gap: 64px;
  }
  
  @media (min-width: 1200px) {
    padding: 0 100px;
  }

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    
    .placeholder {
      width: 48px;
    }
  }
  
  .cart-items-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media (min-width: 768px) {
      flex-basis: 70%;
      padding-bottom: 30px;
    }
  }
  
  .bottom-section {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    @media (min-width: 768px) {
      flex-basis: 30%;
      margin-top: 30px;
      padding: 0;
    }

    .total {
      display: flex;
      justify-content: space-between;
      
      @media (min-width: 768px) {
        gap: 12px;
      }
      
      h1 {
        color: ${ orangePrimary };
      }
    }
  }
`;