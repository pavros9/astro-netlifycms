import { 
    storybook, 
    slider 
} from "@shared/const/typeItemForMapper";
import { Slider } from "@shared/ui/Slider/Slider";

interface MapperProps {
    pages: Page[]
}

export interface Page {
    type: string,
    images?: string[]
}


export const Mapper = (props: MapperProps) => {

    const { pages } = props

    return <>
        {pages?.map((item, index) => {
            switch(item.type){
                case storybook:
                    return (
                        <div key={index} 
                    className="linkWrapper">
                    <a href={item.storybook} 
                        className="link">Сторибук</a>
                </div>
                    )
                case slider:
                    const images = item.images
                    return <Slider key={index} images={images}/>
            }
        })}
    </>
}