import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Deals from '../components/deals/Deals';
import SnackBarBase from '../components/common/SnackBarBase';
import LoadingBase from '../components/common/LoadingBase';
import BrandsList from '../components/brands/BrandsList';
import ProductsList from '../components/products/ProductsList';
import DealModel from '../shared/models/deal';
import { HomeViewWrapper } from '../assets/styles/views/HomeViewWrapper';
import { useHttp } from '../shared/hooks/use-http';
import searchTermContext from '../shared/context/search/search-term-context';
import filteredProductsContext from '../shared/context/products/filtered-products-context';
import searchedProductsContext from '../shared/context/products/searched-products-context';
import productsContext from '../shared/context/products/products-context';

const HomeView = () => {
  const [deals, setDeals] = useState<DealModel[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const searchTermCtx = useContext(searchTermContext);
  const filteredProductsCtx = useContext(filteredProductsContext);
  const searchedProductsCtx = useContext(searchedProductsContext);
  const productsCtx = useContext(productsContext);

  const applyDealsData = useCallback((data: any) => {
    setDeals(data);
  }, []);

  const applyProductsData = useCallback((data: any) => {
    productsCtx.storeProducts(data);
    filteredProductsCtx.getFilteredProducts(data);
  }, []);

  const requestConfig = useMemo(() => {
    return {
      productsConfig: {
        repositoryName: 'products',
      },

      dealsConfig: {
        repositoryName: 'deals',
      },
    };
  }, []);

  const { getData: getDeals } = useHttp(
    requestConfig.dealsConfig,
    applyDealsData
  );
  const {
    loading,
    error,
    getData: getProducts,
  } = useHttp(requestConfig.productsConfig, applyProductsData);

  const { products } = productsCtx;

  const filterByAll = (): void => {
    filteredProductsCtx.filterByAll(products);
    setActiveFilter('all');
  };

  const filterByAdidas = (): void => {
    filteredProductsCtx.filterByAdidas(products);
    setActiveFilter('adidas');
  };

  const filterByNike = (): void => {
    filteredProductsCtx.filterByNike(products);
    setActiveFilter('nike');
  };

  const filterByNewBalance = (): void => {
    filteredProductsCtx.filterByNewBalance(products);
    setActiveFilter('new_balance');
  };

  useEffect((): void => {
    getDeals();
    getProducts();
  }, [getDeals, getProducts]);

  if (loading) return <LoadingBase screenHeight={ true }/>;

  return (
    <HomeViewWrapper>
      <div>
        <div className='home-view-top'>
          <div className='text-paragraph'>
            <h1>Get your style on</h1>
            <p>Top deals</p>
          </div>
        </div>
        <Deals deals={ deals }/>
        <div className='home-view-bottom'>
          <div>
            <BrandsList
              activeFilter={ activeFilter }
              filterByAdidas={ filterByAdidas }
              filterByAll={ filterByAll }
              filterByNike={ filterByNike }
              filterByNewBalance={ filterByNewBalance }
            />
            <ProductsList
              products={
                searchTermCtx.searchTerm.length < 1
                  ? filteredProductsCtx.filteredProducts
                  : searchedProductsCtx.searchedProducts
              }
            />
          </div>
        </div>
      </div>
      <div className='footer'>
        { error ? (
          <SnackBarBase imageType='error' error={ error }>
            <span>Something went wrong, try again...</span>
          </SnackBarBase>
        ) : (
          ''
        ) }
      </div>
    </HomeViewWrapper>
  );
};

export default HomeView;
