import React, { useState } from 'react'
import { Link } from 'gatsby'
import Drawer from '@/components/nav/Drawer'

export default function Navigator() {
  const [drawer, setDrawer] = useState(false)

  return (
    <header className="w-full h-14 py-3 flex justify-center max-md:px-0 bg-bg/90 backdrop-blur sticky top-0 z-50">
      <div className="flex items-center w-[1600px] px-10 max-md:px-0">
        <Link to="/" className="text-2xl max-md:text-xl max-md:mx-5 mx-10 flex-1">
          Jagaldol
        </Link>

        <nav className="max-md:hidden h-full flex items-end">
          <Link
            to="/"
            className="mx-3 text-xl transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
            activeClassName="text-main-theme -translate-y-[2px]"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="mx-3 text-xl transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
            activeClassName="text-main-theme -translate-y-[2px]"
          >
            Project
          </Link>
          <a
            href="https://blog.jagaldol.com/"
            className="mx-3 text-xl word-highlight transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
          >
            Blog
          </a>
        </nav>

        <div className="hidden max-md:block">
          <button
            type="button"
            aria-label="메뉴"
            onClick={() => setDrawer(!drawer)}
            className="relative mr-5 h-6 p-1 z-50"
          >
            {drawer ? (
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
          {drawer ? <Drawer /> : null}
        </div>
      </div>
    </header>
  )
}
