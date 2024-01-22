import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Navigator from '@/containers/nav/Navigator'
import Title from '@/containers/title/Title'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigator />
      <Title />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hyejun An - Backend Developer</title>
