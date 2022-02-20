import styled from "styled-components";
import * as variables from '../variables';

type Props = {
  active?: boolean,
  color?: string
}

export const Icon = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: all 100ms ease-in;
  color: ${ props => props.active ? variables.orangePrimary : variables.mediumGrayIcons };
  color: ${ props => props.color ? props.color : '' };
`;
