export const textWithImg = {
    name: 'textWithImg',
    label: 'Текст с картинкой',
    widget: 'object',
    fields: [
        {
            name: 'image',
            label: 'Картинка',
            widget: 'image',
        },
        {
            name: 'imgSize',
            label: 'Размер картинки',
            widget: 'select',
            required: false,
            options: [
                {
                    label: 'Маленькая',
                    value: 'small',
                },
                {
                    label: 'Средняя',
                    value: 'medium',
                },
                {
                    label: 'Большая',
                    value: 'big',
                },
            ],
        },
        {
            name: 'text',
            label: 'Текст',
            widget: 'string',
        },
    ],
}
