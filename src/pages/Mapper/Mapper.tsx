import { 
    link, 
    slider 
} from "@shared/const/typeItemForMapper";
import { Slider } from "@shared/ui/Slider/Slider";
import { 
    IBaseItem, 
    isLink, 
    isSlider 
} from "./types";

interface MapperProps {
    items: IBaseItem[]
}

export const Mapper = (props: MapperProps) => {
    const { items } = props

    const itemsPage = items?.map((item, index) => {
        if(item.type === link && isLink(item)){
            return (
                <div key={index} 
                    className="linkWrapper">
                    <a href={item.href}
                        className="link">{item.text}</a>
                </div>
            )
        }
        else if(item.type === slider && isSlider(item)){
            const images = item.images

            return <Slider key={index} images={images}/>
        }
    })
    
    return <>{itemsPage}</>
}