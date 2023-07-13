export const navigation = {
    label: 'Навигация',
    name: 'primaryNav',
    widget: 'list',
    fields: [
        {
            label: 'Ссылка',
            name: 'label',
            widget: 'string'
        },
        {
            label: 'Страница',
            name: 'uri',
            widget: 'relation',
            collection: 'pages',
            value_field: '{{slug}}',
            display_fields: ['title'],
            search_fields: ['title']
        },
        {
            label: 'Список',
            name: 'dropdown',
            widget: 'list',
            fields: [
                {
                    label: 'Ссылка',
                    name: 'link_dropdown',
                    widget: 'string'
                },
                {
                    label: 'path',
                    name: 'uri_dropdown',
                    widget: 'string'
                },
                {
                    label: 'Страница',
                    name: 'uri',
                    widget: 'relation',
                    collection: 'pages',
                    value_field: '{{slug}}',
                    display_fields: ['title'],
                    search_fields: ['title']
                },
            ]
        }
    ]
}