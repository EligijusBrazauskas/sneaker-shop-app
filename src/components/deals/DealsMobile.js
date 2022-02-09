import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import DealCardBase from "../UI/DealCardBase";
import classes from '../../assets/scss/deals/deals-mobile.module.scss';

const DealsMobile = ({ deals }) => {
  return (
    <Swiper
      className={ classes.deals_mobile }
      spaceBetween={ 10 }
      slidesPerView={ 1.3 }
      slidesOffsetBefore={ 30 }
      slidesOffsetAfter={ 30 }
      loop={ true }
      autoplay={ true }
      modules={[ Autoplay ]}
    >
      {
        deals.map(deal => {
          return (
            <SwiperSlide key={ Math.random() + deal.name } style={{'padding' : '10px 0'}}>
              <DealCardBase deal={ deal }/>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default DealsMobile;