import classes from '../../assets/scss/products/products-list.module.scss'
import Product from './Product';
import LoadingBase from "../UI/LoadingBase";

const ProductsList = ({ products }) => {

  if (!products) return <LoadingBase/>;

  return (
    <div className={ classes.products_list }>
      {
        products.length > 1 ?
        products.map(product => {
          return <Product product={ product } key={ product.id }/>
        }) :
        <span>No results..</span>
      }
    </div>
  )
}

export default ProductsList;