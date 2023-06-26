export const pages = {
    name: 'pages',
    label: 'Страницы',
    label_singular: 'страницу',
    folder: 'content/pages',
    create: true,
    delete: true,
    slug: "{{slug}}",
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
          }
        ]
      }
    ]
}
