import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import DealCardBase from "./DealCardBase";
import DealModel from "../../models/deal";
import WindowWidthContext from "../../context/window-width/window-width-context";
import { offsetCalculator } from "../../helpers/deals-swiper/offset-calculator";
import { slidesShownCalculator } from "../../helpers/deals-swiper/slides-shown-calculator";

type Props = {
  deals: DealModel[];
}

const Deals = ({ deals }: Props) => {

  const windowWidthCtx = useContext(WindowWidthContext);
  const windowWidth = windowWidthCtx.width;

  const offset = offsetCalculator(windowWidth);
  const slides = slidesShownCalculator(windowWidth);

  return (
    <Swiper
      style={ { 'marginBottom': '30px' } }
      spaceBetween={ 10 }
      slidesPerView={ slides }
      slidesOffsetBefore={ offset }
      slidesOffsetAfter={ offset }
      loop={ true }
      autoplay={ true }
      modules={ [Autoplay] }
    >
      {
        deals.map(deal => {
          return (
            <SwiperSlide key={ deal.id } style={ { 'padding': '10px 0' } }>
              <DealCardBase deal={ deal }/>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default Deals;