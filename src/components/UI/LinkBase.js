import classes from '../../assets/scss/UI/link-base.module.scss';
import { BsFillHouseFill } from 'react-icons/bs';
import { BsFillHeartFill } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';

const LinkBase = ({ icon, active, click }) => {

  const currentIcon = () => {
    switch (icon) {
      case 'home':
        return <BsFillHouseFill className={ classes.icon }/>
      case 'heart':
        return <BsFillHeartFill className={ classes.icon }/>
      case 'cart':
        return <BsFillCartFill className={ classes.icon }/>
      default:
        return;
    }
  }

  return (
    <div className={ `${ classes.link_base } ${ active ? classes.active : '' }` } onClick={() => click()}>
      { currentIcon() }
    </div>
  )
}

export default LinkBase;