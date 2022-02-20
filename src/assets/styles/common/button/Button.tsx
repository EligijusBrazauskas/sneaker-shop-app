import styled from "styled-components";
import { backgroundColorHandler, spanColorHandler } from "./utils";
import * as variables from '../../variables';
import { lightGray, lightGrayHover } from "../../variables";

type Props = {
  backgroundColor?: string,
  textColor?: string,
  cardColor?: string,
  borderRadius?: string,
  border?: boolean,
  borderLighter?: boolean,
  round?: boolean,
  isAtFirstPage?: boolean,
  isAtLastPage?: boolean,
}

const backgroundColor = (props: any) => backgroundColorHandler(props);
const spanColor = (props: any) => spanColorHandler(props);

export const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  z-index: 101;
  transition: background-color 100ms ease-in;
  ${ props => props.round && 'width: 50px'};
  ${ props => props.round && 'height: 50px'};
  padding: ${ props => props.round ? '20px' : '10px' };
  ${ props => props.border && `border: 2px ${ lightGrayHover } solid` };
  ${ props => props.borderLighter && `border: 2px ${ lightGray } solid` };
  border-radius: ${ props => props.borderRadius ? props.borderRadius : '8px' };
  ${ props => backgroundColor(props) };
  ${ props => props.isAtFirstPage || props.isAtLastPage ? 'visibility: hidden' : 'visibility: visible' };
  
  &:hover {
    ${ props => props.backgroundColor === 'gray' && `background-color: ${ variables.lightGrayHover }`};
    ${ props => props.backgroundColor === 'orange-primary' && `background-color: ${ variables.orangePrimaryHover }`};
    ${ props => props.border && `background-color: ${ variables.lightGray}` };
  }
  
  & span {
    ${ props => spanColor(props) };
    font-size: ${ props => props.backgroundColor === 'orange-primary' || props.backgroundColor === 'gray-darker' ? '16px' : '14px' };
  }
  
  .icon {
    height: 20px;
  }
`