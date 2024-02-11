import React from 'react'
import { graphql, HeadFC } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import Badge from '@/components/Badge'

export default function ProjectDetails({ data, children }: any) {
  const { title, subtitle, stack, banner } = data.mdx.frontmatter
  const bannerImage = getImage(banner)
  return (
    <Layout>
      <div className="mt-10 w-full flex justify-center">
        <div className="w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full max-md:px-5">
          <div className="mb-8">
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </div>

          {bannerImage ? (
            <GatsbyImage
              alt={`${title} 대표 이미지`}
              loading="eager"
              image={bannerImage}
              className="mb-2"
              objectFit="contain"
            />
          ) : null}

          <div className="flex gap-1 justify-end items-center flex-wrap">
            {stack.map((value: string) => (
              <div className="h-7" key={value}>
                <Badge name={value} />
              </div>
            ))}
          </div>

          <div className="markdown-body">{children}</div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetailPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        stack
        title
        subtitle
        banner {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

export const Head: HeadFC = ({ data }: any) => <title>{data.mdx.frontmatter.title} | Hyejun An</title>
