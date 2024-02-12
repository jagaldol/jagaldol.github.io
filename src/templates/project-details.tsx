import React, { useEffect, useState } from 'react'
import { graphql, HeadFC, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '@/components/Layout'
import Badge from '@/components/Badge'

export default function ProjectDetails({ data, children }: any) {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { title, subtitle, stack, banner, start_date, end_date, deploy_link } = data.mdx.frontmatter
  const bannerImage = getImage(banner)
  const start = new Date(start_date)
  const end = new Date(end_date)

  const dateString = `${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate()}. ~ ${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate()}.`

  const [enableHover, setEnableHover] = useState(false)

  useEffect(() => {
    // 컴포넌트가 마운트된 후 3초 후에 hover를 활성화
    const timer = setTimeout(() => {
      setEnableHover(true)
    }, 1000)

    // 컴포넌트가 언마운트될 때 타이머 클리어
    return () => clearTimeout(timer)
  }, [])

  return (
    <Layout>
      <div className="mt-10 w-full flex justify-center">
        <div className="w-[1300px] max-2xl:w-[1000px] max-xl:w-[1000px] max-lg:w-[700px] max-md:w-full max-md:px-5">
          <div className="mb-8">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p className="text-end">{dateString}</p>
          </div>
          <div className="group relative mb-2">
            {bannerImage ? (
              <>
                <GatsbyImage alt={`${title} 대표 이미지`} loading="eager" image={bannerImage} objectFit="contain" />
                {deploy_link ? (
                  <Link
                    to={deploy_link}
                    className={`absolute top-0 left-0 w-full h-full opacity-0 ${enableHover ? 'group-hover:opacity-100' : ''} bg-gradient-to-tl from-main-theme to-main-theme/60 z-10 transition-all duration-500 text-white flex drop-shadow-2xl`}
                  >
                    <h3 className="absolute right-0 bottom-0 text-3xl max-md:text-2xl max-sm:text-lg max-sm:-translate-y-3 -translate-x-8 -translate-y-5">
                      바로가기
                    </h3>
                  </Link>
                ) : null}
              </>
            ) : null}
          </div>

          <div className="flex gap-1 justify-end items-center flex-wrap">
            {stack.map((value: string) => (
              <div className="h-7" key={value}>
                <Badge name={value} />
              </div>
            ))}
          </div>

          <div className="markdown-body">{children}</div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsDetailPage($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        stack
        title
        subtitle
        start_date
        end_date
        deploy_link
        banner {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, width: 1300)
          }
        }
      }
    }
  }
`

export const Head: HeadFC = ({ data }: any) => <title>{data.mdx.frontmatter.title} | Hyejun An</title>
