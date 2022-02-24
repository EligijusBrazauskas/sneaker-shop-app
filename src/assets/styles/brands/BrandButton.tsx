import styled from 'styled-components';
import { lightGray, lightGrayText, orangePrimary } from '../variables';

type Props = {
  activeFilter: string;
};

export const BrandButton = styled.button<Props>`
  background-color: ${ (props) =>
  props.activeFilter === "active" ? orangePrimary : lightGray };
  padding: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 100ms ease-in;

  .image-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${ (props) =>
    props.activeFilter === "active"
    ? `color: white`
    : `color: ${ lightGrayText }` };

    img {
      height: 100%;
      width: 100%;
      filter: ${ (props) =>
      props.activeFilter === "active"
        ? `invert(0%) sepia(2%) saturate(0%) hue-rotate(295deg) brightness(107%) contrast(101%)`
        : `invert(59%) sepia(0%) saturate(0%) hue-rotate(31deg) brightness(91%) contrast(84%)` };
    }
  }
`;
