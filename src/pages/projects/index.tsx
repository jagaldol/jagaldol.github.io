import type { HeadFC, PageProps } from 'gatsby'
import React from 'react'
import Navigator from '@/components/nav/Navigator'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="px-5 pt-5">
      <Navigator />
      <div className="h-[600px] flex flex-col text-center">
        <div className="flex flex-col flex-1 items-center justify-center ">
          <h1 className="text-5xl max-md:text-3xl">추가예정입니다.</h1>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Hyejun An - project</title>
