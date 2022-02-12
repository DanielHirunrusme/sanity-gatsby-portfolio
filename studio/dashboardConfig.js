export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62071b32a90e6f2d901f630d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-i8hrqwa4',
                  apiId: 'bdd353c3-e00b-48a9-a591-1489ea2f2bd1'
                },
                {
                  buildHookId: '62071b32d68aaf1b583d088c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-rcm6ez7t',
                  apiId: '1552b8d1-d203-4cbc-9e52-538600599bf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanielHirunrusme/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-rcm6ez7t.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
