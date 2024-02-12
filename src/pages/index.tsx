import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Title from '@/containers/home/title/Title'
import Profile from '@/containers/home/profile/Profile'
import Layout from '@/components/Layout'
import Project from '@/containers/home/Project'

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

export const Head: HeadFC = () => <title>Backend Developer | Hyejun An</title>
