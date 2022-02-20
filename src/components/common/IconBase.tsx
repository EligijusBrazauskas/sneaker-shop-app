import React from "react";
import { BsFillCartFill, BsFillHeartFill, BsFillHouseFill } from "react-icons/bs";
import { AiFillStar } from 'react-icons/ai';
import { Icon } from "../../assets/styles/common/Icon";

type Props = {
  icon?: string,
  active?: boolean
  color?: string
}

const IconBase = ({ icon, active, color }: Props) => {

  const currentIcon = (): any => {
    switch (icon) {
      case 'home':
        return <BsFillHouseFill className={ 'icon' }/>;
      case 'heart':
        return <BsFillHeartFill className={ 'icon' }/>;
      case 'cart':
        return <BsFillCartFill className={ 'icon' }/>;
      case 'star':
        return <AiFillStar className={ 'icon' }/>;
      default:
        return;
    }
  };

  return (
    <Icon active={ active } color={ color }>
      { currentIcon() }
    </Icon>
  );
};

export default IconBase;