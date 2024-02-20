import React from 'react'
import { Link } from 'gatsby'
import { faBlog } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Navigator from '@/components/nav/Navigator'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="px-5 min-h-screen h-auto absolute w-full pb-40">
      <Navigator />
      {children}

      <footer className="absolute bottom-0 left-0 h-16 max-md:h-10 bg-white w-full px-20 max-sm:px-10 flex items-center">
        <div className=" flex-1">
          <Link to="/" className="underline flex-1">
            &copy;Hyejun An.
          </Link>
        </div>

        <div className="flex gap-2 items-end">
          <p>Contact.</p>
          <a href="mailto:jagaldol.dev@gmail.com" aria-label="이메일">
            <FontAwesomeIcon size="lg" icon={faEnvelope} />
          </a>
          <a href="https://github.com/jagaldol" aria-label="깃허브">
            <FontAwesomeIcon size="lg" icon={faGithub} />
          </a>
          <a href="https://blog.jagaldol.com/" aria-label="블로그">
            <FontAwesomeIcon size="lg" icon={faBlog} />
          </a>
        </div>
      </footer>
    </main>
  )
}
