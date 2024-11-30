import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'
import BottomArrow from '@/svgs/bottom-arrow.inline.svg'

export default function Title() {
  const data = useStaticQuery(graphql`
    query Title {
      file(relativePath: { eq: "cloud.jpg" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 1000)
        }
      }
    }
  `)
  const titleBackgroundImage = getImage(data.file)

  const scrollDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.target as HTMLButtonElement

    window.scrollBy({
      top: button.getBoundingClientRect().bottom + 40,
      behavior: 'smooth',
    })
  }
  return (
    <>
      <div className="absolute left-0 top-0 w-full h-[1000px] -z-30 bg-cover bg-center opacity-60 select-none pointer-events-none">
        {titleBackgroundImage ? (
          <GatsbyImage
            className="w-full h-full object-cover"
            loading="eager"
            alt="배경 구름 이미지"
            image={titleBackgroundImage}
          />
        ) : null}
      </div>
      <div className="absolute left-0 top-0 w-full h-[1000px] bg-gradient-to-b from-transparent to-bg -z-20" />

      <div className="h-[700px] flex flex-col text-center">
        <div className="flex flex-col flex-1 items-center justify-center ">
          <h1 className="text-5xl flex gap-4 max-md:gap-2 max-md:flex-col max-md:text-3xl">
            <span>안녕하세요 </span>
            <span>
              <b>안혜준</b>입니다.
            </span>
          </h1>
          <div className="my-10 flex flex-col gap-2">
            <p>
              <b>개발을 사랑하는 AI 엔지니어</b>, 안혜준입니다.
            </p>
            <p>인공지능, 프론트엔드, 백엔드 등 어떤 분야든 만들고 싶은 것을 직접 구현하는 것을 즐깁니다.</p>
            <p className="max-md:block flex flex-col">
              <span>LLM 에이전트를 활용해 문제를 자동화하고 해결하는 데 관심이 많습니다. </span>
              <span>성장하는 AI 엔지니어로 다양한 경험을 통해 실력을 쌓아가고 싶습니다!</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="flex flex-col justify-center items-center animate-moveUpDown"
            onClick={scrollDown}
          >
            <p>더보기</p>
            <BottomArrow />
          </button>
        </div>
      </div>
    </>
  )
}
