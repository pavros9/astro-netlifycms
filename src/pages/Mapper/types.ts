interface IItem {
    type: string
}

interface ISlider extends IItem {
    images: string[]
}

interface ILink extends IItem {
    href: string
    text: string
}

export type IBaseItem = ISlider | ILink

export function isSlider(item: IBaseItem): item is ISlider {
    return (item as ISlider).images !== undefined;
}

export function isLink(item: IBaseItem): item is ILink {
    return (item as ILink).href !== undefined;
}