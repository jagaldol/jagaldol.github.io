import * as React from 'react'
import { HeadFC, PageProps } from 'gatsby'
import Layout from '@/components/Layout'

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="h-[700px] flex flex-col text-center">
        <div className="flex flex-col flex-1 items-center justify-center text-3xl max-md:text-xl">
          <p>Oops!</p>
          <p>존재하지 않는 페이지입니다.</p>
        </div>
      </div>
    </Layout>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
