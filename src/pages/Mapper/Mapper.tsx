import { SliderTemplate } from "src/components/ReactComponents/SliderTemplate/SliderTemplate";

export const Mapper = ({pages}) => {

    return <>
        {pages?.map((item) => {
            if(item.type === 'firstName'){
                return <div className="firstName">{item.firstName}</div>
            }
            if(item.type === 'slider'){
                const images = item.images
                
                return  <SliderTemplate images={images}/>
            }
        })}
    </>
}