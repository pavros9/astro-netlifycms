import { ITextWithImg } from '@shared/types/types'
import cls from './TextWithImg.module.css'
import { classNames } from '@shared/lib/classNames/classNames'

export enum ImgSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    BIG = 'big',
}

export const TextWithImg = (props: ITextWithImg) => {
    const { text, image, imgSize } = props

    return (
        <>
            <div className="">
                <img src={image} className={classNames(undefined, {}, ['max-w-[400px] mx-auto', cls[imgSize]])} />
            </div>
            <p>{text}</p>
        </>
    )
}
