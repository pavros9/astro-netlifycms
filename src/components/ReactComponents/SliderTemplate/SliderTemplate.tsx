
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './SliderTemplate.css'

interface SliderTemplateProps {
    images: string[]
}

export const SliderTemplate = (props: SliderTemplateProps) => {
    const { images } = props

    return <Swiper className="mySwiper">
        {images.map((image, index) => {
            return <SwiperSlide key={index}><img src={image}/></SwiperSlide>
        })}
            
    </Swiper>
}