import styled from 'styled-components';
import image from '../../svg/background.svg';

export const ProductViewWrapper = styled.div`
  min-height: calc(100vh - 80px);
  width: 100%;
  gap: 32px;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    background: linear-gradient(
      90deg,
      rgba(242, 242, 242, 1) 1%,
      rgba(245, 245, 245, 1) 42%,
      rgba(245, 245, 245, 1) 64%,
      rgba(242, 242, 242, 1) 100%
    );
    min-height: calc(100vh - 160px);
    gap: 0;
  }

  .product-view-top {
    height: 100%;
    padding: 0 20px 20px 20px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: url(${ image }) no-repeat;
    background-size: cover;
    background-position: bottom;
    background-size: 1200px;
    overflow: hidden;

    @media (min-width: 768px) {
      background: none;
    }

    @media (min-width: 768px) {
      padding: 0 40px 20px 40px;
    }

    @media (min-width: 1024px) {
      padding: 0 60px 20px 60px;
    }

    @media (min-width: 1200px) {
      padding: 0 100px 20px 100px;
    }

    .header {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
      padding: 30px 0;
    }

    .image-container {
      display: flex;
      justify-content: center;
      align-items: center;
      max-height: 250px;
      max-width: 500px;
      min-width: 300px;
      min-height: 200px;
      overflow: hidden;
      padding-bottom: 20px;
      transition: all 400ms ease-in-out;

      @media (min-width: 768px) {
        width: 500px;
        height: 300px;
      }

      img {
        height: 100%;
        width: 100%;
      }
    }
  }

  .carousel-buttons-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .carousel-buttons {
      max-width: 900px;
      width: 100%;
      display: flex;
      justify-content: space-between;

      button {
        cursor: pointer;
        transition: all 100ms ease-in;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .content-separator {
    padding: 0 20px;
    overflow-x: hidden;
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 32px;

    @media (min-width: 768px) {
      justify-content: start;
      align-items: center;
    }

    @media (min-width: 768px) {
      padding: 0 40px;
    }

    @media (min-width: 1024px) {
      padding: 0 60px;
    }

    @media (min-width: 1200px) {
      padding: 0 100px;
    }

    .product-view-bottom {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      gap: 16px;
      background-color: white;

      @media (min-width: 768px) {
        padding: 24px;
        width: 650px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 24px;
      }

      .rating-reviews-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @media (min-width: 768px) {
          justify-content: start;
          align-items: center;
          gap: 32px;
        }

        .reviews {
          font-weight: 400;
          font-size: 14px;
        }
      }

      .price-available-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        @media (min-width: 768px) {
          justify-content: start;
          align-items: center;
          gap: 32px;
        }

        .stock {
          font-weight: 500;
        }

        .prices-group {
          display: flex;
          justify-content: start;
          align-items: center;
          gap: 8px;
        }
      }

      .about {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 12px;

        p {
          line-height: 1.3;
        }
      }

      .add-to-cart-button {
        @media (min-width: 768px) {
          min-width: 400px;
          align-self: center;
        }
      }
    }

    .bottom-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;