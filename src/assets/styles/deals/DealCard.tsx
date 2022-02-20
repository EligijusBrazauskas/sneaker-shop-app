import styled from "styled-components";
import { bluePrimary, orangePrimary, pinkPrimary } from "../variables";

type Props = {
  children?: any,
  cardColor: string,
}

export const DealCard = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 25px 20px;
  gap: 24px;
  border-radius: 12px;
  height: 160px;
  position: relative;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 13px 0px;
  ${ props => props.cardColor === 'orange' && `background-color: ${ orangePrimary }` };
  ${ props => props.cardColor === 'blue' && `background-color: ${ bluePrimary }` };
  ${ props => props.cardColor === 'pink' && `background-color: ${ pinkPrimary }` };
  
  @media (min-width: 768px) {
    height: 180px;
  }
  
  @media (min-width: 1024px) {
    height: 200px;
  }

  h2 {
    max-width: 223px;
    z-index: 101;
  }

  .image {
    position: absolute;
    display: none;

    @media screen and (min-width: 370px) {
      display: block;
      transform: scale(0.6);
      right: -100px;
    };

    @media screen and (min-width: 520px) {
       transform: scale(1);
       right: -20px;
    };
  }
`;