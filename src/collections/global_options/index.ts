export const global_options = {
    label: 'Настройка сайта',
    name: 'globals',
    delete: true,
    files: [
      {
        label: 'Настройка сайта',
        name: 'site',
        file: 'content/pages/globals/site.md',
        fields:[
          {
            label: 'Site name',
            name: 'siteName',
            widget: 'string'
          },
          {
            label: 'Domain',
            name: 'domain',
            widget: 'string'
          },
          {
            label: 'Primary navigation',
            name: 'primaryNav',
            widget: 'list',
            fields: [
              {
                label: 'Label',
                name: 'label',
                widget: 'string'
              },
              {
                label: 'Page',
                name: 'uri',
                widget: 'relation',
                collection: 'pages',
                value_field: '{{slug}}',
                display_fields: ['title'],
                search_fields: ['title']
              }
            ]
          }
        ]
      }
    ]
}