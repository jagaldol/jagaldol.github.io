import { graphql, useStaticQuery } from 'gatsby'

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          name
          description
          image
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
