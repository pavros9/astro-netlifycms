interface IItem {
    type?: string
}

export interface ISlider extends IItem {
    images: string[]
}

export interface ILink extends IItem {
    href: string
    text: string
}

export interface ITextWithImg extends IItem {
    text: string
    image: string
    imgSize?: string
}

export type IBaseItem = ISlider | ILink | ITextWithImg

export function isSlider(item: IBaseItem): item is ISlider {
    return (item as ISlider).images !== undefined
}

export function isLink(item: IBaseItem): item is ILink {
    return (item as ILink).href !== undefined
}

export function isTextWithImg(item: IBaseItem): item is ITextWithImg {
    return (item as ITextWithImg).text !== undefined
}
