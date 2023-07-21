export const slider = {
    name: 'slider',
    label: 'Слайдер',
    widget: 'object',
    fields: [
        {
            name: 'images',
            label: 'Слайды',
            widget: 'list',
            field: {
                label: 'Image',
                name: 'image',
                widget: 'image'
            }
        },
    ]
}