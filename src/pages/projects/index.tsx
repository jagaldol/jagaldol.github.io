import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const projects = data.allMdx.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl my-5">Project List</h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {projects.map((project: any) => {
            const image = getImage(project.frontmatter.image)
            return (
              <div key={project.id} className="flex flex-col">
                <div className="w-full p-5 flex-1">
                  <div className="h-full p-5 bg-gray-200 drop-shadow-lg flex items-center justify-center">
                    {image ? (
                      <GatsbyImage className="" alt={`${project.frontmatter.title} 대표 이미지`} image={image} />
                    ) : null}
                  </div>
                </div>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
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
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
          stack
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Hyejun An - project</title>
