import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'

export default function Navbar({ isNavOpen, close }: { isNavOpen: boolean; close: () => void }) {
  const navOutsideRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 외부 클릭을 처리하는 함수
    function handleClickOutside(event: any) {
      if (navOutsideRef.current && navOutsideRef.current.contains(event.target)) {
        close()
      }
    }

    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navOutsideRef, isNavOpen])

  useEffect(() => {
    const handleResize = () => {
      close()
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="overflow-x-hidden">
      {isNavOpen ? (
        <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-screen z-40 bg-black/10" ref={navOutsideRef} />
      ) : null}
      <nav
        className={`fixed right-0 top-0 bottom-0 z-50
        bg-bg w-72 h-screen px-5 py-32 flex flex-col items-center
        transition-all ${isNavOpen ? 'translate-x-0' : 'translate-x-[100%]'}`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/"
            className="text-lg pb-1 transition-all hover:text-main-theme duration-1000"
            activeClassName="text-main-theme"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg pb-1 transition-all hover:text-main-theme duration-1000"
            activeClassName="text-main-theme"
          >
            Project
          </Link>
          <a
            href="https://blog.jagaldol.com/"
            className="text-lg pb-1 transition-all hover:text-main-theme duration-1000"
          >
            Blog
          </a>
        </div>
      </nav>
    </div>
  )
}
