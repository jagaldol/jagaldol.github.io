import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Link } from 'gatsby'

export default function Drawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-0 top-0 w-full h-screen z-30 bg-black/10">
      <div className="bg-bg w-[80%] h-full p-5 flex flex-col items-center">
        <div className="w-full text-end">
          <button type="button" aria-label="닫기" onClick={onClose}>
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </div>
        <Link to="/" className="text-2xl mt-12 mb-20">
          Jagaldol
        </Link>
        <div className="flex flex-col items-center gap-6">
          <Link to="/projects" className="text-lg">
            Project
          </Link>
          <a href="https://blog.jagaldol.com/" className="text-lg">
            Blog
          </a>
        </div>
      </div>
    </div>
  )
}
