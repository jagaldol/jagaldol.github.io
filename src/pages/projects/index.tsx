import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ProjectContainer from '@/containers/project/ProjectConatiner'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const mainProjects = data.main.nodes
  const subProjects = data.sub.nodes
  const toyProjects = data.toy.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl my-8">Project List</h1>
        <ProjectContainer title="Main Project" projects={mainProjects} />
        <ProjectContainer title="Sub Project" projects={subProjects} />
        <ProjectContainer title="Toy Project" projects={toyProjects} />
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
              original {
                src
              }
            }
          }
        }
      }
    }
    sub: allMdx(
      sort: { frontmatter: { end_date: DESC } }
      filter: { internal: { contentFilePath: { glob: "**/src/projects/sub/*.mdx" } } }
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
    toy: allMdx(
      sort: { frontmatter: { end_date: DESC } }
      filter: { internal: { contentFilePath: { glob: "**/src/projects/toy/*.mdx" } } }
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
    image={data.main.nodes[0].frontmatter.image.childImageSharp.original.src}
  />
)
