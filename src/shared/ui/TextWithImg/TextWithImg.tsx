import { ITextWithImg } from '@shared/types/types'

export const TextWithImg = (props: ITextWithImg) => {
    const { text, image } = props

    return <>
        <div className=''>
            <img src={image} className="max-w-[400px] mx-auto"/>
        </div>
        <p>{text}</p>
    </>
}