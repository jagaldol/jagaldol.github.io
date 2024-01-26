import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Drawer from '@/components/nav/Drawer'

function Tab({ url, title }: { url: string; title: string }) {
  return (
    <a href={url} className="mx-3 text-2xl">
      {title}
    </a>
  )
}

export default function Navigator() {
  const [drawer, setDrawer] = useState(false)
  return (
    <>
      <nav className="hidden max-md:block">
        <button type="button" aria-label="메뉴" onClick={() => setDrawer(true)}>
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        {drawer ? <Drawer onClose={() => setDrawer(false)} /> : null}
      </nav>
      <nav className="w-full px-9 py-10 flex items-center max-md:px-0 max-md:hidden">
        <a href="/" className="text-3xl mx-10 flex-1 max-md:mx-5 max-md:text-xl max-md:text-center">
          Jagaldol
        </a>
        <div>
          <Tab url="/projects" title="Project" />
          <Tab url="https://blog.jagaldol.com/" title="Blog" />
        </div>
      </nav>
    </>
  )
}
