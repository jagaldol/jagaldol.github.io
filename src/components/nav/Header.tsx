import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import MobileNavigator from '@/components/nav/MobileNavigator'
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

  return (
    <>
      <header className="w-full h-14 py-3 flex 2xl:justify-center max-md:px-0 bg-bg/90 backdrop-blur sticky top-0 left-0 z-50">
        <div className="flex items-center w-[1600px] px-10 max-md:px-0">
          <div className="mx-10 flex-1 max-md:mx-5">
            <Link to="/" className="text-2xl max-md:text-xl">
              Jagaldol
            </Link>
          </div>

          {breakpoints.md ? (
            <MobileNavigator toggleNav={() => setIsNavOpen(!isNavOpen)} isNavOpen={isNavOpen} />
          ) : (
            <Navigator />
          )}
        </div>
      </header>
      {breakpoints.md ? (
        <div className="overflow-x-hidden">
          {isNavOpen ? (
            <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-screen z-30 bg-black/10"> </div>
          ) : null}
          <nav
            className="fixed right-0 top-0 bottom-0 z-40 bg-bg w-72 h-screen p-5 py-32 flex flex-col items-center transition-all translate-x-[100%]"
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
