import styled from 'styled-components';
import { lightGrayHover, orangePrimary, orangeSecondary } from '../variables';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background-color: white;
  border: 2px solid ${ lightGrayHover };
  border-radius: 10px;
  padding: 4px 6px;
  height: 35px;
  
  button {
    background-color: white;
    border-radius: 8px;
    transition: background-color 100ms ease-in;
    cursor: pointer;
    
    &:hover {
      background-color: ${ orangeSecondary };
    }
    
    &:first-child {
      padding-left: 8px;
      padding-right: 8px;
    }
    
    span {
      font-size: 18px;
      color: ${ orangePrimary };
    }
  }
  
  input {
    width: 30px;
    text-align: center;
    font-weight: 700;
    outline: none;
    border: none;
    
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    margin: 0;
  }
`;
