import classes from '../../assets/scss/UI/loading-base.module.scss';

const LoadingBase = ({ height }) => {
  return (
    <div className={ `${ classes.loading_base } ${ height === 'screen' ? classes.screen : '' }` }>
      <div className={ classes.spinner }>
        <div className={ classes.spinner_inner }>
        </div>
      </div>
    </div>
  )
}

export default LoadingBase;