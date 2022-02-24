import React from 'react';
import { Button } from '../../assets/styles/common/button/Button';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  backgroundColor?: string;
  cardColor?: string;
  textColor?: string;
  borderRadius?: string;
  border?: boolean;
  borderLighter?: boolean;
  round?: boolean;
  isAtFirstPage?: boolean;
  isAtLastPage?: boolean;
}

const ButtonBase: React.FC<ButtonProps> = ({
  children,
  backgroundColor,
  cardColor,
  textColor,
  borderRadius,
  border,
  borderLighter,
  round,
  isAtFirstPage,
  isAtLastPage,
  ...props
}) => {
  return (
    <Button
      backgroundColor={ backgroundColor }
      textColor={ textColor }
      cardColor={ cardColor }
      borderRadius={ borderRadius }
      border={ border }
      borderLighter={ borderLighter }
      round={ round }
      isAtFirstPage={ isAtFirstPage }
      isAtLastPage={ isAtLastPage }
      { ...props }
    >
      { children }
    </Button>
  );
};

export default ButtonBase;

