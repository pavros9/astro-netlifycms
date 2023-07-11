export const global_options = {
    label: 'Настройка сайта',
    name: 'globals',
    delete: true,
    files: [
        {
            label: 'Настройка сайта',
            name: 'site',
            file: 'content/globals/site.md',
            fields:[
                {
                    label: 'Название сайта',
                    name: 'siteName',
                    widget: 'string'
                },
                {
                    label: 'Домен',
                    name: 'domain',
                    widget: 'string'
                },
                {
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
            ]
        }
    ]
}