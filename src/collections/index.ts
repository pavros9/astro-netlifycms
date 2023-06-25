// import { global_options } from "./global_options";
// import { pages } from "./pages";
export default [
    {
        collection: {
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
                    label: 'firstName',
                    widget: 'object',
                    fields: [
                      {
                        name: 'firstName',
                        label: 'firstName',
                        widget: 'string'
                      }
                    ]
                  },
                  {
                    name: 'img',
                    label: 'img',
                    widget: 'object',
                    fields: [
                      {
                        name: 'posts',
                        label: 'img',
                        widget: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
        }
    },
    // {
    //     collection: pages
    // },
    
];
