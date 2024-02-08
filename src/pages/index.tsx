import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Title from '@/containers/home/title/Title'
import Profile from '@/containers/home/profile/Profile'
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

export const Head: HeadFC = () => <title>Hyejun An - Backend Developer</title>
