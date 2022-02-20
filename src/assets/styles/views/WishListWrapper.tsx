import styled from "styled-components";
import { orangePrimary } from "../variables";

export const WishListWrapper = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    min-height: calc(100vh - 160px);
  }
  
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    
    @media (min-width: 768px) {
      padding: 20px 40px 20px;
    }
    
    @media (min-width: 1024px) {
      padding: 20px 60px 20px;
    }
    
    @media (min-width: 1200px) {
      padding: 20px 100px 20px;
    }
    
    .placeholder {
      width: 48px;
    }
  }
  
  .cart-items-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .bottom-section {
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    .total {
      display: flex;
      justify-content: space-between;
      
      h1 {
        color: ${ orangePrimary };
      }
    }
  }
`;