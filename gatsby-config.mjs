import remarkGfm from 'remark-gfm'

const config = {
  siteMetadata: {
    title: `AI Engineer`,
    name: `Hyejun An`,
    description: `AI 엔지니어 안혜준의 개발자 포트폴리오`,
    siteUrl: `https://jagaldol.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-remark-responsive-iframe',
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          xs: '(max-width: 320px)',
          sm: '(max-width: 640px)',
          md: '(max-width: 768px)',
          lg: '(max-width: 1024px)',
          xl: '(max-width: 1280px)',
          xxl: '(max-width: 1536px)',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://jagaldol.com/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',

      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-prismjs`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1300,
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-cname`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/projects/',
      },
      __key: 'projects',
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: { '@': 'src' },
        extensions: ['tsx'],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
}

export default config
