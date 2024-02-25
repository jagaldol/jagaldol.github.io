import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useBreakpoint } from 'gatsby-plugin-breakpoints'
import Navigator from '@/components/nav/Navigator'
import NavToggleButton from '@/components/nav/NavToggleButton'
import Navbar from '@/components/nav/Navbar'

export default function Header() {
  const breakpoints = useBreakpoint()

  const [isNavOpen, setIsNavOpen] = useState(false)

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
        <>
          <NavToggleButton isOpen={isNavOpen} toggle={() => setIsNavOpen(!isNavOpen)} />
          <Navbar isNavOpen={isNavOpen} close={() => setIsNavOpen(false)} />
        </>
      ) : null}
    </>
  )
}
