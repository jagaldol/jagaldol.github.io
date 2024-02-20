import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import Block from '@/containers/home/Block'
import ProjectLink from '@/components/ProjectLink'

export default function Project() {
  const data = useStaticQuery(graphql`
    query HomeProject {
      allMdx(
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
    }
  `)

  const projects = data.allMdx.nodes

  return (
    <Block title="Project">
      <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
        {projects.map((project: any) => {
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

      <AnchorLink
        to="/projects/#etc"
        className={`
        flex justify-center items-center rounded-full
        text-lg max-md:text-base
        h-14 max-2xl:h-12 max-md:h-10 
        mx-20 my-10 max-2xl:mx-10 max-md:mx-0
        drop-shadow text-white bg-main-theme hover:bg-main-theme/70 transition-all
        `}
        stripHash
      >
        View More
      </AnchorLink>
    </Block>
  )
}
