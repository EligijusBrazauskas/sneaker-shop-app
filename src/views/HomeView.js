import classes from '../assets/scss/views/home-view.module.scss'
import NavigationMobile from '../components/navigation/NavigationMobile';
import DealsMobile from '../components/deals/DealsMobile';
import SnackBarBase from "../components/UI/SnackBarBase";
import LoadingBase from "../components/UI/LoadingBase";
import BrandsList from "../components/brands/BrandsList";
import ProductsList from "../components/products/ProductsList";
import FooterMobile from "../components/footer/FooterMobile";
import { useEffect, useState } from "react";

const HomeView = () => {

  const [products, setProducts] = useState([]);
  const [deals, setDeals] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchedProducts, setSearchedProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('');

  const getProducts = () => {
    setLoading(true);
    return fetch('/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          clearError();
        }, 5000)
        setLoading(false)
      })
  }

  const getDeals = () => {
    setLoading(true);
    return fetch('/deals')
      .then(response => response.json())
      .then(data => {
        setDeals(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true)
        setTimeout(() => {
          clearError();
        }, 5000)
        setLoading(false);
      });
  }


  const getSearchTerm = (term) => {
   setSearchTerm(term);
  }

  const clearSearchField = () => {
    setSearchTerm('');
  }

  const filterBySearchTerm = () => {
    if (searchTerm !== '') {
      const searchResults = filteredProducts.filter(product => {
        return product.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase());
      })
      setSearchedProducts(searchResults);
    }
    else {
      setSearchedProducts(filteredProducts)
    }
  }

  const filterByAll = () => {
    setFilteredProducts(products);
    setActiveFilter('all');
  }

  const filterByAdidas = () => {
    const newArr = products.filter(item => item.brand === 'adidas')
    setFilteredProducts(newArr)
    setActiveFilter('adidas')
  }

  const filterByNike = () => {
    const newArr = products.filter(item => item.brand === 'nike')
    setFilteredProducts(newArr)
    setActiveFilter('nike')
  }

  const filterByEsprit = () => {
    const newArr = products.filter(item => item.brand === 'esprit')
    setFilteredProducts(newArr)
    setActiveFilter('esprit')
  }

  const clearError = () => {
    setError(false)
  }

  useEffect(() => {
    clearError();
    getDeals();
    getProducts();
  }, [])

  if (loading) return <LoadingBase height={ 'screen' }/>;

  return (
    <div className={ classes.home_view }>
      <div>
        <div className={ classes.home_view_top }>
          <NavigationMobile getSearchTerm={ getSearchTerm } clearSearchField={ clearSearchField } filterBySearchTerm={ filterBySearchTerm }/>
          <div className={ classes.text_paragraph }>
            <h1>Get your style on</h1>
            <p>Top deals</p>
          </div>
        </div>
        <DealsMobile deals={ deals }/>
        <div className={ classes.home_view_bottom }>
          <div>
            <BrandsList activeFilter={ activeFilter }
              filterByAdidas={ filterByAdidas }
              filterByAll={ filterByAll }
              filterByNike={ filterByNike }
              filterByEsprit={ filterByEsprit }
            />
            <ProductsList products={ searchTerm.length < 1 ? filteredProducts : searchedProducts }/>
          </div>
        </div>
      </div>
      <div className={ classes.footer }>
        {
          error ?
            <SnackBarBase imageType={ 'error' } error={ error } clearError={ clearError }>
              <span>Something went wrong, try again...</span>
            </SnackBarBase> : ''
        }
        <FooterMobile/>
      </div>
    </div>
  )
}

export default HomeView;