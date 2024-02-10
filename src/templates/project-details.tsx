import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/components/Layout'
import Badge from '@/components/Badge'

export default function ProjectDetails({ data, children }: any) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <div className="flex gap-1 justify-center items-center flex-wrap">
          {data.mdx.frontmatter.stack.map((value: string) => (
            <div className="h-7" key={value}>
              <Badge name={value} />
            </div>
          ))}
        </div>
        {children}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetailPage($id: String!) {
    mdx(id: { eq: $id }) {
      internal {
        content
      }
      frontmatter {
        stack
        title
        subtitle
      }
    }
  }
`
