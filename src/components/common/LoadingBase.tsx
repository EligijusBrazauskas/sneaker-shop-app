import React from 'react';
import { Loading } from '../../assets/styles/common/Loading';

type Props = {
  screenHeight?: boolean;
  isMobile?: boolean;
};

const LoadingBase = ({ screenHeight, isMobile }: Props) => {
  return (
    <Loading screenHeight={ screenHeight } isMobile={ isMobile }>
      <div className='spinner'>
        <div className='spinner_inner'/>
      </div>
    </Loading>
  );
};

export default LoadingBase;
