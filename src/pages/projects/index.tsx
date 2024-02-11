import type { HeadFC, PageProps } from 'gatsby'
import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import Badge from '@/components/Badge'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const projects = data.allMdx.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl my-5">Project List</h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
          {projects.map((project: any) => {
            const image = getImage(project.frontmatter.image)
            return (
              <Link
                key={project.id}
                to={project.frontmatter.slug}
                className="relative w-full h-full p-5 bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"
              >
                {image ? (
                  <GatsbyImage
                    alt={`${project.frontmatter.title} 대표 이미지`}
                    loading="eager"
                    image={image}
                    className="h-full group-hover:scale-90 transition-all duration-500"
                    objectFit="contain"
                  />
                ) : null}
                <div className="absolute left-0 top-0 w-full h-full opacity-0 group-hover:opacity-100 bg-gradient-to-tl from-main-theme to-main-theme/40 z-10 transition-all duration-500 text-white">
                  <h3 className="absolute right-0 bottom-0 text-3xl -translate-x-8 -translate-y-10">
                    {project.frontmatter.title}
                  </h3>
                  <div className="absolute right-0 bottom-0 -translate-x-7 -translate-y-3 flex gap-1 justify-end items-center flex-wrap">
                    {project.frontmatter.stack.map((value: string) => (
                      <div key={value} className="h-6">
                        <Badge name={value} />
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Projects {
    allMdx(sort: { frontmatter: { end_date: DESC } }) {
      nodes {
        id
        frontmatter {
          slug
          title
          stack
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500)
            }
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Project | Hyejun An</title>
