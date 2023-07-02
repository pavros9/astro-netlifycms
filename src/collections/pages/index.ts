export const pages = {
    name: 'pages',
    label: 'Страницы',
    label_singular: 'страницу',
    folder: 'content/pages',
    create: true,
    delete: true,
    slug: "{{slug}}",
    nested:{depth:3},
    meta:{path:{widget:'string',label:'Path',index_file:'_index'}},
    fields: [
        {
            name: 'title',
            label: 'Url',
            widget: 'string'
        },
        {
            name: 'titleHead',
            label: 'Title',
            widget: 'string'
        },
        {
            name: 'page',
            label: 'Контент страницы',
            widget: 'list',
            types: [
                {
                    name: 'firstName',
                    label: 'Имя',
                    widget: 'object',
                    fields: [
                        {
                            name: 'firstName',
                            label: 'Имя',
                            widget: 'string',
                        }
                    ]
                },
                {
                    name: 'storybook',
                    label: 'Сторибук',
                    widget: 'object',
                    fields: [
                        {
                            name: 'storybook',
                            label: 'Сторибук',
                            widget: 'string',
                        }
                    ]
                },
                {
                    name: 'img',
                    label: 'Картинка',
                    widget: 'object',
                    fields: [
                        {
                            name: 'posts',
                            label: 'Картинка',
                            widget: 'string'
                        }
                    ]
                },
                {
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
            ]
        }
    ]
}
