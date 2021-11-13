export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '618fcf6435b5274347a6d356',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1ngdc8ty',
                  apiId: 'd7b21fda-ff19-4a87-bfd2-63cceecf76c5'
                },
                {
                  buildHookId: '618fcf65f11ca8fe72044fbe',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qhn1ios3',
                  apiId: '1d1c093c-fcc5-4691-a30b-57bd9b854c40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rickyhaswifi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qhn1ios3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
