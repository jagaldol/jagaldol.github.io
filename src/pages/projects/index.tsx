import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '@/components/Layout'
import SEO from '@/components/SEO'
import ProjectContainer from '@/containers/project/ProjectConatiner'

const IndexPage: React.FC<PageProps> = ({ data }: { data: any }) => {
  const mainProjects = data.main.nodes
  const minorProjects = data.minor.nodes
  const toyProjects = data.toy.nodes

  return (
    <Layout>
      <div className="mt-5 flex flex-col text-center">
        <h1 className="text-3xl my-8">Project List</h1>
        <ProjectContainer title="Main Project" projects={mainProjects} />
        <ProjectContainer title="Minor Project" projects={minorProjects} />
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
            }
          }
        }
      }
    }
    minor: allMdx(
      sort: { frontmatter: { end_date: DESC } }
      filter: { internal: { contentFilePath: { glob: "**/src/projects/minor/*.mdx" } } }
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
    image={`/og-image/${data.main.nodes[0].frontmatter.slug}/thumbnail.png`}
  />
)
