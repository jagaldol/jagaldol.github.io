import React from 'react'
import { Link } from 'gatsby'

export default function Drawer() {
  return (
    <div className="fixed left-0 top-0 w-full h-screen z-30 bg-black/10 flex justify-end">
      <nav className="bg-bg w-72 h-full p-5 py-32 flex flex-col items-center">
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
