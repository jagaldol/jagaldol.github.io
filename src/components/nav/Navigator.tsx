import React from 'react'

function Tab({ url, title }: { url: string; title: string }) {
  return (
    <a href={url} className="mx-3 text-2xl">
      {title}
    </a>
  )
}

export default function Navigator() {
  return (
    <nav className="w-full px-14 py-10 flex items-center">
      <a href="/" className="text-3xl mx-10 flex-1">
        Jagaldol
      </a>
      <div>
        <Tab url="/projects" title="Project" />
        <Tab url="https://blog.jagaldol.com/" title="Blog" />
      </div>
    </nav>
  )
}
