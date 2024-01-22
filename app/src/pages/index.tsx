import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Navigator from '@/containers/Navigator'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navigator />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hyejun An - Backend Developer</title>
