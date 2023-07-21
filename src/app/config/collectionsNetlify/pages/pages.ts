import { link } from '@collections/items/link'
import { slider } from '@collections/items/slider'
import { textWithImg } from '@collections/items/textWithImg'

export const pages = {
    name: 'pages',
    label: 'Страницы',
    label_singular: 'страницу',
    folder: 'content/pages',
    create: true,
    delete: true,
    slug: '{{slug}}',
    nested: { depth: 3 },
    meta: { path: { widget: 'string', label: 'Path', index_file: '_index' } },
    fields: [
        {
            name: 'title',
            label: 'Url',
            widget: 'string',
        },
        {
            name: 'titleHead',
            label: 'Title',
            widget: 'string',
        },
        {
            name: 'page',
            label: 'Контент страницы',
            widget: 'list',
            types: [link, slider, textWithImg],
        },
    ],
}
