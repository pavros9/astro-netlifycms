
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './SliderTemplate.css'


export const SliderTemplate = ({images}) => {

    return <Swiper className="mySwiper">
            {images.map((image) => {
              return <SwiperSlide><img src={image}/></SwiperSlide>
            })}
            
  </Swiper>
}