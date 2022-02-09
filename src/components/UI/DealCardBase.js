import classes from '../../assets/scss/UI/deal-card-base.module.scss';
import ButtonBase from "./ButtonBase";
import { useEffect, useState } from "react";

const DealCardBase = ({ deal }) => {
  const [cardColor, setCardColor] = useState('');

  useEffect(() => {
    setCardColor(deal.color)
  }, []);

  const cardColorClass = () => {
    switch (cardColor) {
      case 'orange':
        return classes.orange;
      case 'blue':
        return classes.blue;
      case 'pink':
        return classes.pink;
      default:
        return;
    }
  }

  const imageClass = () => {
    switch (deal.image) {
      case 'deal1':
        return classes.image1
      case 'deal2':
        return classes.image2
      case 'deal3':
        return classes.image3
      default:
        return;
    }
  }

  return (
    <div className={ `${ classes.deal_card_base } ${ cardColorClass() }` }>
      <h2 className='h2_white'>{ deal.title }</h2>
      <ButtonBase isPrimaryRound={ true } cardColor={ cardColor }>
        <span>Shop Now</span>
      </ButtonBase>
      <img className={ `${ classes.image } ${ imageClass() }` }
           src={ require(`../../assets/images/deals/${ deal.image }.jpg`) } alt=""/>
    </div>
  )
}

export default DealCardBase;