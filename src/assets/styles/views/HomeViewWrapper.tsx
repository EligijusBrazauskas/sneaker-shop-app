import styled from "styled-components";

export const HomeViewWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - (76px + 80px));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (min-width: 768px) {
    min-height: calc(100vh - 160px);
  }

  .home-view-top {
    padding: 0 20px;
    height: 100%;
    
    @media (min-width: 768px) {
      padding: 20px 40px 0;
    }
    
    @media (min-width: 1024px) {
      padding: 20px 60px 0;
    }
    
    @media (min-width: 1200px) {
      padding: 20px 100px 0;
    }

    .text-paragraph {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 30px;
    }
  }

  .home-view-bottom {
    min-height: 100%;
    height: 100%;
  }

  .snackbar-container {
    padding: 0 20px;
    position: sticky;
    bottom: 10px;
    z-index: 101;
    
    @media (min-width: 768px) {
      padding: 0 40px;
    }
    
    @media (min-width: 1024px) {
      padding: 20px 60px;
    }
  
    @media (min-width: 1200px) {
      padding: 20px 100px;
    }
  }

  .footer {
    width: 100%;
    background-color: white;
    z-index: 101;
  }
`;