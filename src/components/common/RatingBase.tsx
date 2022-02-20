import React, { useEffect, useState } from 'react';
import { Rating } from "../../assets/styles/common/Rating";
import IconBase from "./IconBase";
import { yellowPrimary } from "../../assets/styles/variables";

type Props = {
  rating: number
}

const RatingBase = ({ rating }: Props) => {

  const [starCount, setStarCount] = useState<string[]>([]);

  const formattedRating = (): number => {
    if (rating > 5) {
      return 5;
    } else if (rating < 1) {
      return 1;
    }
    return rating;
  };

  let starElements: string[] = [];

  useEffect((): void => {
    for (let i = 0; i < formattedRating(); i++) {
      starElements.push(`star ${ i + 1 }`);
    }

    setStarCount(starElements);

  }, []);

  return (
    <Rating>
      {
        starCount.map(element => {
          return <IconBase icon={ 'star' } color={ yellowPrimary } key={ element }/>;
        })
      }
    </Rating>
  );
};

export default RatingBase;