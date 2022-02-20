import React from 'react';
import Product from './Product';
import LoadingBase from "../common/LoadingBase";
import ProductModel from "../../models/product";
import { ProductsListWrapper } from "../../assets/styles/products/ProductsListWrapper";

type Props = {
  products: ProductModel[],
}

const ProductsList = ({ products }: Props) => {

  if (!products) return <LoadingBase/>;

  return (
    <ProductsListWrapper>
      {
        products.length > 0 ?
          products.map(product => {
            return <Product product={ product } key={ product.id }/>;
          }) :
          <span>No results..</span>
      }
    </ProductsListWrapper>
  );
};

export default ProductsList;