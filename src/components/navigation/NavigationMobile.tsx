import React, { ChangeEvent, useContext } from 'react';
import searchTermContext from '../../shared/context/search/search-term-context';
import ButtonBase from '../common/ButtonBase';
import { MdClose } from 'react-icons/md';
import { NavigationMobileWrapper } from '../../assets/styles/navigation/NavigationMobileWrapper';
import searchedProductsContext from '../../shared/context/products/searched-products-context';

const NavigationMobile = () => {
  const searchTermCtx = useContext(searchTermContext);
  const searchedProductsCtx = useContext(searchedProductsContext);

  const updateSearchTerm = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    searchTermCtx.setSearchTerm(target.value);
    searchedProductsCtx.filterBySearchTerm();
  };

  const clearSearch = (): void => {
    searchTermCtx.clearSearchTerm();
    searchTermCtx.clearSearchTerm();
  };

  return (
    <NavigationMobileWrapper>
      <input
        className='search'
        type='search'
        placeholder='What are you looking for?'
        onChange={ updateSearchTerm }
        value={ searchTermCtx.searchTerm }
      />
      <ButtonBase backgroundColor={ 'gray' } onClick={ clearSearch }>
        <MdClose className='button-icon'/>
      </ButtonBase>
    </NavigationMobileWrapper>
  );
};

export default NavigationMobile;
