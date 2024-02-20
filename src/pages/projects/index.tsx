import type { HeadFC, PageProps } from 'gatsby'
import { graphql, Link } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import ProjectLink from '@/components/ProjectLink'
import SEO from '@/components/SEO'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const mainProjects = data.main.nodes
  const etcProjects = data.etc.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl my-8">Project List</h1>
        <h2 className="text-xl my-4">Main Project</h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
          {mainProjects.map((project: any) => {
            const image = getImage(project.frontmatter.image)
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
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
        <h2 className="text-xl my-4" id="etc">
          ETC
        </h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
          {etcProjects.map((project: any) => {
            const image = getImage(project.frontmatter.image)
            return (
              <Link
                key={project.id}
                to={`/projects/${project.frontmatter.slug}`}
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
    main: allMdx(
      sort: { frontmatter: { end_date: DESC } }
      filter: { internal: { contentFilePath: { glob: "**/src/projects/main/*.mdx" } } }
    ) {
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
    etc: allMdx(
      sort: { frontmatter: { end_date: DESC } }
      filter: { internal: { contentFilePath: { glob: "**/src/projects/etc/*.mdx" } } }
    ) {
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

export const Head: HeadFC = ({ data }: any) => (
  <SEO
    title="Project"
    description="지금까지 수행해온 프로젝트 모음입니다."
    pathname="/projects/"
    image={`/og-image/${data.main.nodes[0].frontmatter.slug}/thumbnail.png`}
  />
)
