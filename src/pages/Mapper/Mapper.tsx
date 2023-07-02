import { SliderTemplate } from "src/components/ReactComponents/SliderTemplate/SliderTemplate";

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
            if(item.type === 'firstName'){
                return <div key={index} className="firstName">{item.firstName}</div>
            }
            if(item.type === 'storybook'){
                return <div key={index} className="linkWrapper"><a href={item.storybook} className="link">Сторибук</a></div>
            }
            if(item.type === 'slider'){
                const images = item.images
                
                return  <SliderTemplate key={index} images={images}/>
            }
        })}
    </>
}