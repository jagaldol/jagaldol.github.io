import React, { useEffect } from 'react'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'

export default function ImageDetail({ srcList, number }: { srcList: string[]; number: number }) {
  const { lockScroll, openScroll } = useBodyScrollLock()

  useEffect(() => {
    lockScroll()
    return () => {
      openScroll()
    }
  }, [])

  return (
    <div className="fixed z-[500] top-0 bottom-0 left-0 right-0 bg-black/80 flex items-center justify-center">
      <div className="">
        <img src={srcList[number]} alt={srcList[number]} />
      </div>
    </div>
  )
}
