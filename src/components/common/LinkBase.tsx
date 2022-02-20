import React from 'react';
import { Link } from '../../assets/styles/common/Link';
import IconBase from "./IconBase";

type Props = {
  children?: any,
  icon?: string,
  active?: boolean,
  click: () => void
}

const LinkBase = ({ icon, active, click, children }: Props) => {

  return (
    <Link active={ active } onClick={ () => click() }>
      <IconBase icon={ icon } active={ active }/>
      { children }
    </Link>
  );
};

export default LinkBase;