import React from 'react';
import Brand from "./Brand";
import { BrandsListWrapper } from "../../assets/styles/brands/BrandsListWrapper";

type Props = {
  filterByAdidas: () => void,
  filterByAll: () => void,
  filterByNike: () => void,
  filterByNewBalance: () => void,
  activeFilter: string
}

const BrandsList = ({ filterByAdidas, filterByAll, filterByNike, filterByNewBalance, activeFilter }: Props) => {

  return (
    <BrandsListWrapper>
      <h2>Top Brands</h2>
      <div className="brands-list">
        <Brand active={ activeFilter } type={ 'all' } onClick={ () => filterByAll() }/>
        <Brand active={ activeFilter } type={ 'adidas' } onClick={ () => filterByAdidas() }/>
        <Brand active={ activeFilter } type={ 'nike' } onClick={ () => filterByNike() }/>
        <Brand active={ activeFilter } type={ 'new_balance' } onClick={ () => filterByNewBalance() }/>
      </div>
    </BrandsListWrapper>
  );
};

export default BrandsList;