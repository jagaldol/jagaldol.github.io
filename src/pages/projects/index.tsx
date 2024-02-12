import type { HeadFC, PageProps } from 'gatsby'
import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import ProjectLink from '@/components/ProjectLink'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const projects = data.allMdx.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl mt-8 mb-16">Project List</h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
          {projects.map((project: any) => {
            const image = getImage(project.frontmatter.image)
            return (
              <Link
                key={project.id}
                to={project.frontmatter.slug}
                className="relative w-full h-full bg-gradient-to-bl to-gray-300 from-gray-100 drop-shadow-lg flex items-center justify-center max-h-96 group"
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
                <ProjectLink title={project.frontmatter.title} stacks={project.frontmatter.stack} />
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
