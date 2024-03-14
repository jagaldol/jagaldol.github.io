import React from 'react'
import { Link } from 'gatsby'

export default function Navigator() {
  return (
    <nav className="h-full flex items-end max-md:hidden">
      <Link
        to="/"
        className="mx-3 text-lg transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
        activeClassName="text-main-theme -translate-y-[2px]"
      >
        HOME
      </Link>
      <Link
        to="/projects"
        className="mx-3 text-lg transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
        activeClassName="text-main-theme -translate-y-[2px]"
      >
        PROJECT
      </Link>
      <a
        href="/files/resume.pdf"
        className="mx-3 text-lg transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
      >
        RESUME
      </a>
      <a
        href="https://blog.jagaldol.com/"
        className="mx-3 text-lg transition-all hover:text-main-theme hover:-translate-y-[2px] duration-1000"
      >
        BLOG
      </a>
    </nav>
  )
}
