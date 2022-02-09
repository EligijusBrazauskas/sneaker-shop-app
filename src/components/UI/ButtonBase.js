import classes from '../../assets/scss/UI/button-base.module.scss';

const ButtonBase = ({
    children,
    isSecondary,
    isSecondaryDarker,
    isSecondaryRoundWhite,
    isPrimaryRound,
    cardColor,
    isNonClickable,
    isBigger,
    isPrimaryOrange,
    ...buttonProps
  }) => {
  const buttonColors = () => {
    switch (cardColor) {
      case 'orange':
        return classes.primary_round_white;
      case 'blue':
        return classes.primary_round_alternate;
      case 'pink':
        return classes.primary_round_white;
      default:
        return;
    }
  }

  return (
    <button
      className={ `
      ${ classes.base_button }
      ${ isSecondary ? classes.secondary : '' }
      ${ isSecondaryDarker ? classes.secondary_darker : '' }
      ${ isPrimaryRound ? buttonColors() : '' }
      ${ isSecondaryRoundWhite ? classes.secondary_round_white : '' }
      ${ isBigger ? classes.bigger : '' }
      ${ isPrimaryOrange ? classes.primary_orange : '' }
      ` }
      { ...buttonProps }
    >
      { children }
    </button>
  )
}

export default ButtonBase;

