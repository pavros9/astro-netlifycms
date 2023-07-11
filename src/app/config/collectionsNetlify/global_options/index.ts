import { navigation } from "./navigation"

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
                navigation
            ]
        }
    ]
}