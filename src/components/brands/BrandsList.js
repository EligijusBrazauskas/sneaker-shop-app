import classes from '../../assets/scss/brands/brands-list.module.scss';
import Brand from "./Brand";

const BrandsList = ({ filterByAdidas, filterByAll, filterByNike, filterByEsprit, activeFilter }) => {

  return (
    <div className={ classes.brands_list_wrapper }>
      <h2>Top Brands</h2>
      <div className={ classes.brands_list }>
        <Brand active={ activeFilter } type={ 'all' } onClick={ () => filterByAll() }/>
        <Brand active={ activeFilter } type={ 'adidas' } onClick={ () => filterByAdidas() }/>
        <Brand active={ activeFilter } type={ 'nike' } onClick={ () => filterByNike() }/>
        <Brand active={ activeFilter } type={ 'esprit' } onClick={ () => filterByEsprit() }/>
      </div>
    </div>
  )
}

export default BrandsList;