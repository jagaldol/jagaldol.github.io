import type { HeadFC, PageProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import Title from '@/components/title/Title'
import Profile from '@/components/profile/Profile'
import Layout from '@/components/Layout'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title />
      <Profile />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Hyejun An - Backend Developer</title>