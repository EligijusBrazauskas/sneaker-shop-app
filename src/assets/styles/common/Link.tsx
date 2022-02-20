import styled from "styled-components";
import * as variables from '../variables';
import { orangePrimary } from '../variables';

type Props = {
  active?: boolean
}

export const Link = styled.div<Props>`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 100ms ease-in;
  background-color: ${ props => props.active ? variables.orangeSecondary : 'white' };
  
  .cart-counter {
    margin-left: 4px;
    font-size: 14px;
    padding: 3px 3px;
    border-radius: 3px;
    color: ${ props => props.active ? orangePrimary : 'white' };
    background-color: ${ props => props.active ? 'white' : orangePrimary };
  }
`;