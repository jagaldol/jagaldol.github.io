import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Title from '@/containers/home/title/Title'
import Profile from '@/containers/home/profile/Profile'
import Layout from '@/components/Layout'
import Project from '@/containers/home/Project'
import SEO from '@/components/SEO'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Title />
      <Profile />
      <Project />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <SEO />
