import classes from '../../assets/scss/navigation/navigation-mobile.module.scss';
import ButtonBase from "../UI/ButtonBase";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const NavigationMobile = ({ getSearchTerm, filterBySearchTerm, clearSearchField }) => {

  const [searchTerm, setSearchTerm] = useState('')

  const updateSearchTerm = (event) => {
    setSearchTerm(event.target.value);
    getSearchTerm(event.target.value);
    filterBySearchTerm();
  }

  const clearSearch = () => {
    clearSearchField();
    setSearchTerm('');
  }

  return (
    <div className={ classes.navigation_mobile }>
      <input
        className={ classes.search }
        type="search"
        placeholder="What are you looking for?"
        onChange={ updateSearchTerm }
        value={ searchTerm }
      />
      <ButtonBase isSecondary={ true } onClick={ clearSearch }>
        <MdClose/>
      </ButtonBase>
    </div>
  );
}

export default NavigationMobile;
