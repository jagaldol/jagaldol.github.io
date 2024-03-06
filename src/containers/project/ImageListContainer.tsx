import React, { useEffect, useRef, useState } from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ImageListContainer({
  imageList400,
  imageList200,
}: {
  imageList400: IGatsbyImageData[]
  imageList200: IGatsbyImageData[]
}) {
  const breakpoints = useBreakpoint()

  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true)
  const [isScrolledToRight, setIsScrolledToRight] = useState(false)

  const scrollRef = useRef<HTMLDivElement>(null) // 스크롤 가능한 div에 대한 참조를 생성합니다.
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

  return imageList400.length > 0 ? (
    <div className="flex justify-center my-10 bg-neutral-100 relative">
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

      <div className="flex gap-5 overflow-x-scroll hide-scroll-bar select-none" ref={scrollRef}>
        {breakpoints.lg
          ? imageList200.map((image: IGatsbyImageData, index) => (
              <GatsbyImage
                alt=""
                image={image}
                className="rounded h-full min-w-max"
                objectFit="contain"
                key={image.images.fallback?.src || `image-${index}`}
              />
            ))
          : imageList400.map((image: IGatsbyImageData, index) => (
              <GatsbyImage
                alt=""
                image={image}
                className="rounded h-full min-w-max"
                objectFit="contain"
                key={image.images.fallback?.src || `image-${index}`}
              />
            ))}
      </div>
      {!isScrolledToRight && (
        <div className="absolute z-10 -right-7 max-lg:-right-4 top-0 bottom-0 flex items-center">
          <button
            type="button"
            aria-label="왼쪽 더보기"
            className="bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10"
            onClick={scrollToRight}
          >
            <FontAwesomeIcon size="lg" icon={faAngleRight} />
          </button>
        </div>
      )}
    </div>
  ) : null
}
