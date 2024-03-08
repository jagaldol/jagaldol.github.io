import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import useSiteMetadata from '@/hooks/use-site-metadata'

export default function SEO({
  title,
  description,
  image,
  pathname,
  children,
}: {
  title?: string
  description?: string
  image?: string
  pathname?: string
  children?: string
}) {
  const { title: defaultTitle, name, description: defaultDescription, siteUrl } = useSiteMetadata()

  const data = useStaticQuery(graphql`
    query DefaultImageForSEO {
      file(relativePath: { eq: "profile.png" }, sourceInstanceName: { eq: "images" }) {
        childImageSharp {
          original {
            src
          }
        }
      }
    }
  `)

  const seo = {
    title: `${title || defaultTitle} | ${name}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || data.file.childImageSharp.original.src}`,
    url: `${siteUrl}${pathname || `/`}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:site_name" content={`${defaultTitle} | ${name}`} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="twitter:card" content="summary_large_image" />
      {children}
    </>
  )
}
