import React, { useState } from 'react'
import { Link } from 'gatsby'
import Drawer from '@/components/nav/Drawer'

export default function Navigator() {
  const [drawer, setDrawer] = useState(false)
  return (
    <>
      <nav className="hidden max-md:block pt-5">
        <button
          type="button"
          aria-label="메뉴"
          onClick={() => setDrawer(!drawer)}
          className="fixed top-5 right-5 h-6 p-1 z-50"
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
      </nav>
      <nav className="w-full px-9 py-10 flex items-center max-md:px-0 max-md:hidden">
        <div className="mx-10 flex-1">
          <Link to="/" className="text-3xl">
            Jagaldol
          </Link>
        </div>
        <Link
          to="/"
          className="mx-3 text-2xl pb-1 transition-all hover:text-main-theme hover:-translate-y-1 duration-1000"
          activeClassName="text-main-theme -translate-y-1"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="mx-3 text-2xl pb-1 transition-all hover:text-main-theme hover:-translate-y-1 duration-1000"
          activeClassName="text-main-theme -translate-y-1"
        >
          Project
        </Link>
        <a
          href="https://blog.jagaldol.com/"
          className="mx-3 text-2xl pb-1 word-highlight transition-all hover:text-main-theme hover:-translate-y-1 duration-1000"
        >
          Blog
        </a>
      </nav>
    </>
  )
}
