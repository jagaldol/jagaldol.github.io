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
        <div>
          <Link to="/projects" className="mx-3 text-2xl pb-1 underline-animate">
            Project
          </Link>
          <a href="https://blog.jagaldol.com/" className="mx-3 text-2xl pb-1 underline-animate">
            Blog
          </a>
        </div>
      </nav>
    </>
  )
}
