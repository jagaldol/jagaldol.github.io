import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'
import Drawer from '@/components/nav/Drawer'

export default function Navigator() {
  const [drawer, setDrawer] = useState(false)
  return (
    <>
      <nav className="hidden max-md:block pt-5">
        <button type="button" aria-label="메뉴" onClick={() => setDrawer(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        {drawer ? <Drawer onClose={() => setDrawer(false)} /> : null}
      </nav>
      <nav className="w-full px-9 py-10 flex items-center max-md:px-0 max-md:hidden">
        <div className="mx-10 flex-1">
          <Link to="/" className="text-3xl">
            Jagaldol
          </Link>
        </div>
        <Link
          to="/"
          className="mx-3 text-2xl pb-1 transition-all hover:text-main-theme hover:-translate-y-px"
          activeClassName="text-main-theme"
        >
          Home
        </Link>
        <Link
          to="/projects"
          className="mx-3 text-2xl pb-1 transition-all hover:text-main-theme hover:-translate-y-px"
          activeClassName="text-main-theme"
        >
          Project
        </Link>
        <a
          href="https://blog.jagaldol.com/"
          className="mx-3 text-2xl pb-1 word-highlight transition-all hover:text-main-theme hover:-translate-y-px"
        >
          Blog
        </a>
      </nav>
    </>
  )
}
