import React from 'react'
import { Link } from 'gatsby'

export default function Drawer() {
  return (
    <div className="fixed left-0 top-0 w-full h-screen z-30 bg-black/10 flex justify-end">
      <div className="bg-bg w-[80%] h-full p-5 flex flex-col items-center">
        <Link to="/" className="text-2xl mt-12 mb-20">
          Jagaldol
        </Link>
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
      </div>
    </div>
  )
}
