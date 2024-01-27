import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

function Tab({ url, title }: { url: string; title: string }) {
  return (
    <a href={url} className="text-lg">
      {title}
    </a>
  )
}

export default function Drawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute left-0 top-0 w-full h-screen z-30 bg-black/10">
      <div className="bg-bg w-[80%] h-full p-5 flex flex-col items-center">
        <div className="w-full text-end">
          <button type="button" aria-label="닫기" onClick={onClose}>
            <FontAwesomeIcon icon={faX} size="lg" />
          </button>
        </div>
        <a href="/" className="text-2xl mt-12 mb-20">
          Jagaldol
        </a>
        <div className="flex flex-col items-center gap-6">
          <Tab url="/projects" title="Project" />
          <Tab url="https://blog.jagaldol.com/" title="Blog" />
        </div>
      </div>
    </div>
  )
}
