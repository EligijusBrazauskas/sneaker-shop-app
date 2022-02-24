import styled from 'styled-components';
import { lighterGrayHover, lightGray, orangePrimary } from '../variables';

export const ProductWrapper = styled.div`
  flex-basis: 100%;
  background-color: ${ lightGray };
  padding: 10px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 100ms ease-in;

  &:hover {
    background-color: ${ lighterGrayHover };
    transform: scale(1.02);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;
  }

  @media screen and (min-width: 420px) {
    flex-basis: 48%;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 32%;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .heart {
      cursor: pointer;
      width: 30px;
      height: 30px;
      transition: all 50ms ease-in;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        transform: scale(1.3);
      }

      .heart-full {
        color: ${ orangePrimary };
      }
    }
  }

  .image-container {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    img {
      height: 100%;
      position: absolute;
      transform: scale(0.6);
      bottom: 10px;
    }
  }

  .bottom {
    display: flex;
    gap: 8px;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    padding: 10px;

    .prices {
      display: flex;
      gap: 4px;
      justify-content: start;
      align-items: center;
    }
  }
`;