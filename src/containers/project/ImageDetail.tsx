import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'

export default function ImageDetail({
  srcList,
  number,
  close,
  toLeft,
  toRight,
}: {
  srcList: string[]
  number: number
  close: () => void
  toLeft: () => void
  toRight: () => void
}) {
  const { lockScroll, openScroll } = useBodyScrollLock()

  useEffect(() => {
    lockScroll()
    return () => {
      openScroll()
    }
  }, [])

  return (
    <div className="fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex justify-center">
      <div className="w-[1400px] flex flex-col items-center justify-center">
        <div className="flex w-full justify-end pr-10 max-md:pr-5">
          <button type="button" aria-label="닫기" onClick={close}>
            <FontAwesomeIcon icon={faXmark} color="white" size="3x" />
          </button>
        </div>

        <div className="px-5 h-[80%] flex items-center">
          <img src={srcList[number]} alt={srcList[number]} className="max-w-full max-h-full flex-1 object-contain" />
        </div>

        <div className="flex items-center">
          <div className="mx-7 max-lg:mx-4">
            <button
              type="button"
              aria-label="왼쪽 더보기"
              className={`bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 ${number > 0 ? '' : 'invisible'}`}
              onClick={toLeft}
            >
              <FontAwesomeIcon size="lg" icon={faAngleLeft} />
            </button>
          </div>
          <p className="text-white text-xl w-32 text-center">
            {number + 1} / {srcList.length}
          </p>
          <div className="mx-7 max-lg:mx-4">
            <button
              type="button"
              aria-label="오른쪽 더보기"
              className={`bg-white rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.3)] h-14 w-14 max-lg:h-10 max-lg:w-10 ${number < srcList.length - 1 ? '' : 'invisible'}`}
              onClick={toRight}
            >
              <FontAwesomeIcon size="lg" icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
