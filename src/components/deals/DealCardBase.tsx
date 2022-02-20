import ButtonBase from "../common/ButtonBase";
import React, { useEffect, useState } from "react";
import DealModel from "../../models/deal";
import { DealCard } from "../../assets/styles/deals/DealCard";

type Props = {
  deal: DealModel
}

const DealCardBase = ({ deal }: Props) => {
  const [cardColor, setCardColor] = useState('white');

  useEffect((): void => {
    setCardColor(deal.color);
  }, []);

  return (
    <DealCard cardColor={ cardColor }>
      <h2 className="h2_white">{ deal.title }</h2>
      <ButtonBase color={ cardColor } cardColor={ cardColor }>
        <span>Shop Now</span>
      </ButtonBase>
      <img
        className="image"
        src={ require(`../../assets/images/deals/${ deal.image }.jpg`) } alt=""/>
    </DealCard>
  );
};

export default DealCardBase;