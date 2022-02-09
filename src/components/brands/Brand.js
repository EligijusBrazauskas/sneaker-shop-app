import classes from '../../assets/scss/brands/brand.module.scss';

const Brand = ({ active, type, ...buttonProps }) => {

  const currentIcon = () => {
    switch (type) {
      case 'all':
        return;
      case 'adidas':
        return 'brand1'
      case 'nike':
        return 'brand2'
      case 'esprit':
        return 'brand3'
      default:
        return;
    }
  }

  const currentActiveFilter = () => {
    if (active === 'all' && type === 'all') {
      return classes.active;
    }
    if (active === 'adidas' && type === 'adidas') {
      return classes.active;
    }
    if (active === 'nike' && type === 'nike') {
      return classes.active;
    }
    if (active === 'esprit' && type === 'esprit') {
      return classes.active;
    }
    return '';
  }

  return (
    <button className={ `${ classes.brand } ${ currentActiveFilter() }` } { ...buttonProps }>
      <div className={ `${ classes.image_wrapper }` }>
        {
          currentIcon() ?
            <img src={ require(`../../assets/svg/${ currentIcon() }.svg`) } alt=""/> :
            <span>All</span>
        }
      </div>
    </button>
  )
}

export default Brand;