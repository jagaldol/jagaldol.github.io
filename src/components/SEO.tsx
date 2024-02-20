import React from 'react'
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
  const { title: defaultTitle, name, description: defaultDescription, image: defaultImage, siteUrl } = useSiteMetadata()

  const seo = {
    title: `${title || defaultTitle} | ${name}`,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || `/`}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
      {children}
    </>
  )
}
