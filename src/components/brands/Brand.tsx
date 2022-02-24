import React from 'react';
import { BrandButton } from '../../assets/styles/brands/BrandButton';
import { activeFilterHandler } from '../../shared/utils/active-filter-handler';
import { currentIconHandler } from '../../shared/utils/current-icon-handler';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: string;
  type: string;
}

const Brand: React.FC<ButtonProps> = ({ active, type, ...props }) => {
  const currentIcon = currentIconHandler(type);

  const currentActiveFilter = activeFilterHandler(active, type);

  return (
    <BrandButton activeFilter={ currentActiveFilter } { ...props }>
      <div className='image-wrapper'>
        { currentIcon ? (
          <img src={ require(`../../assets/svg/${ currentIcon }.svg`) } alt=''/>
        ) : (
          <span>All</span>
        ) }
      </div>
    </BrandButton>
  );
};

export default Brand;
