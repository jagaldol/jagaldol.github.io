import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import React from 'react'
import ProjectLink from '@/components/ProjectLink'

export default function ProjectContainer({ title, projects }: { title: string; projects: any }) {
  return (
    <>
      <h2 className="text-xl my-4" id={title.replace(' ', '_')}>
        {title}
      </h2>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 py-5 mb-20 max-md:grid-cols-1 mx-20 max-2xl:mx-10 max-md:mx-0 gap-x-3 gap-y-10">
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
    </>
  )
}
