import { Slider } from "@shared/ui/Slider/Slider";

interface MapperProps {
    pages: Page[]
}

export interface Page {
    type: string,
    firstName?: string,
    images?: string[]
}


export const Mapper = (props: MapperProps) => {

    const { pages } = props

    return <>
        {pages?.map((item, index) => {
            if(item.type === 'storybook'){
                return <div key={index} 
                    className="linkWrapper">
                    <a href={item.storybook} 
                        className="link">Сторибук</a>
                </div>
            }
            if(item.type === 'slider'){
                const images = item.images
                
                return  <Slider key={index} images={images}/>
            }
        })}
    </>
}