
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './Slider.css'

interface SliderProps {
    images: string[]
}

export const Slider = (props: SliderProps) => {
    const { images } = props

    return <Swiper className="mySwiper">
        {images.map((image, index) => {
            return <SwiperSlide key={index}><img src={image}/></SwiperSlide>
        })}
            
    </Swiper>
}