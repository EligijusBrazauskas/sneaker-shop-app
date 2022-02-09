import classes from '../../assets/scss/UI/rating-base.module.scss';
import { AiFillStar } from 'react-icons/ai';
import { useEffect, useState } from "react";

const RatingBase = ({ rating }) => {

  const [starCount, setStarCount] = useState([]);

  let starElements = [];

  const formattedRating = () => {
    if (rating > 5) {
      return 5
    }
    else if (rating < 0) {
      return 0
    }
    return rating;
  }

  useEffect( () => {
    for (let i = 0; i < formattedRating() ; i++) {
      starElements.push(`star ${i + 1}`)
    }

    setStarCount(starElements)

  }, [])

  return (
    <div className={ classes.rating_base }>
      {
        starCount.map(element => {
          return <AiFillStar className={ classes.icon } key={element}/>
        })
      }
    </div>
  )
}

export default RatingBase;