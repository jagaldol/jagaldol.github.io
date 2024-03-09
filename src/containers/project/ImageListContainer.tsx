import React, { useEffect, useRef, useState } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import ImageDetail from '@/containers/project/ImageDetail'

const ImageComponent = styled.div<{ width: number }>`
  display: flex;
  align-items: center;
  min-width: ${({ width }) => (width < 1000 ? width : 1000)}px;
  @media (max-width: 1024px) {
    min-width: ${({ width }) => {
      const halfWidth = Math.floor(width / 2)
      return halfWidth < 348 ? halfWidth : 348
    }}px;
  }
`

function ImageList({
  imageList,
  onClickImage,
}: {
  imageList: IGatsbyImageData[]
  onClickImage: (num: number) => void
}) {
  const breakpoints = useBreakpoint()
  const scrollRef = useRef<HTMLDivElement>(null) // 스크롤 가능한 div에 대한 참조를 생성합니다.

  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true)
  const [isScrolledToRight, setIsScrolledToRight] = useState(false)

  // 왼쪽으로 스크롤하는 함수
  const scrollToLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: breakpoints.lg ? -350 : -800, behavior: 'smooth' }) // 여기서 -300은 스크롤할 양입니다. 필요에 따라 조절하세요.
    }
  }

  // 오른쪽으로 스크롤하는 함수
  const scrollToRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: breakpoints.lg ? 350 : 800, behavior: 'smooth' }) // 여기서 300은 스크롤할 양입니다. 필요에 따라 조절하세요.
    }
  }
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const isRight = scrollLeft + clientWidth >= scrollWidth
      const isLeft = scrollLeft <= 0 // 왼쪽 끝에 도달했는지 확인
      setIsScrolledToRight(isRight)
      setIsScrolledToLeft(isLeft)
    }
  }

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScroll)
      checkScroll() // 컴포넌트 마운트 시 초기 스크롤 위치 확인
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  return (
    <>
      {!isScrolledToLeft && (
        <div className="absolute z-10 -left-7 max-lg:-left-4 top-0 bottom-0 flex items-center">
          <button
            type="button"
            aria-label="왼쪽 더보기"
            className="bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10"
            onClick={scrollToLeft}
          >
            <FontAwesomeIcon size="lg" icon={faAngleLeft} />
          </button>
        </div>
      )}
      <div className="flex gap-5 overflow-x-scroll hide-scroll-bar" ref={scrollRef}>
        {imageList.map((image: IGatsbyImageData, index) => {
          return (
            <ImageComponent
              width={image.width}
              onClick={() => onClickImage(index)}
              aria-label={`${index} 번째 이미지`}
              key={image.images.fallback?.src || `image-${index}`}
            >
              <GatsbyImage
                alt={`${index} 번째 이미지`}
                image={image}
                className="rounded-xl hover:cursor-pointer"
                objectFit="contain"
              />
            </ImageComponent>
          )
        })}
      </div>
      {!isScrolledToRight && (
        <div className="absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center">
          <button
            type="button"
            aria-label="오른쪽 더보기"
            className="bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10"
            onClick={scrollToRight}
          >
            <FontAwesomeIcon size="lg" icon={faAngleRight} />
          </button>
        </div>
      )}
    </>
  )
}

export default function ImageListContainer({
  imageList,
  srcList,
}: {
  imageList: IGatsbyImageData[]
  srcList: string[]
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [number, setNumber] = useState(0)

  const onClickImage = (num: number) => {
    setNumber(num)
    setIsOpen(true)
  }

  return (
    <div className="flex justify-center my-10 bg-neutral-200 relative h-[400px] max-lg:max-h-[200px] max-lg:h-[200px]">
      <ImageList imageList={imageList} onClickImage={onClickImage} />

      {isOpen ? (
        <ImageDetail
          srcList={srcList}
          number={number}
          close={() => setIsOpen(false)}
          toLeft={() => setNumber(number - 1 < 0 ? 0 : number - 1)}
          toRight={() => setNumber(number + 1 > srcList.length - 1 ? srcList.length - 1 : number + 1)}
        />
      ) : null}
    </div>
  )
}
