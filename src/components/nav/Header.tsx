import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Navigator from '@/components/nav/Navigator'

export default function Header() {
  const breakpoints = useBreakpoint()

  const [isNavOpen, setIsNavOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const keyframes = [
      { transform: isNavOpen ? 'translateX(100%)' : 'translate(0)' },
      { transform: isNavOpen ? 'translateX(0)' : 'translateX(100%)' },
    ]
    if (navRef.current !== null)
      navRef.current.animate(keyframes, {
        delay: 0,
        duration: 200,
        easing: 'ease-out',
        iterations: 1,
        fill: 'forwards',
      })
  }, [isNavOpen])

  useEffect(() => {
    const handleResize = () => {
      setIsNavOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <header className="w-full h-14 py-3 flex 2xl:justify-center max-md:px-0 bg-bg/90 backdrop-blur sticky top-0 left-0 z-30">
        <div className="flex items-center w-[1600px] px-10 max-md:px-0">
          <div className="mx-10 flex-1 max-md:mx-5">
            <Link to="/" className="text-2xl max-md:text-xl">
              Jagaldol
            </Link>
          </div>

          {breakpoints.md ? null : <Navigator />}
        </div>
      </header>
      {breakpoints.md ? (
        <button
          type="button"
          aria-label="메뉴"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="fixed top-4 right-5 h-6 p-1 z-[100]"
        >
          {isNavOpen ? (
            <div
              className="relative w-6 h-[3px] bg-transparent
              transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500
              before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:left-0
              before:-rotate-45 before:top-0
              after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:left-0
              after:rotate-45 after:top-0"
            />
          ) : (
            <div
              className="relative w-6 h-[3px] bg-main-theme
              transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500
              before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:top-[9px] before:left-0
              after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:-top-[9px] after:left-0"
            />
          )}
        </button>
      ) : null}
      {breakpoints.md ? (
        <div className="overflow-x-hidden">
          {isNavOpen ? (
            <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-screen z-40 bg-black/10"> </div>
          ) : null}
          <nav
            className="fixed right-0 top-0 bottom-0 z-50 bg-bg w-72 h-screen p-5 py-32 flex flex-col items-center transition-all translate-x-[100%]"
            ref={navRef}
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
      ) : null}
    </>
  )
}
