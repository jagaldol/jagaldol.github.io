import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Navigator from '@/components/nav/Navigator'
import Title from '@/components/title/Title'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="px-5 pt-5">
      <Navigator />
      <Title />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hyejun An - Backend Developer</title>
