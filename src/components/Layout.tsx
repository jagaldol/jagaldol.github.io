import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import { faArrowDownLong, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Header from '@/components/nav/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [atBottom, setAtBottom] = useState(false)

  const toggleScroll = () => {
    if (atBottom) {
      // 최상단으로 스크롤
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // 최하단으로 스크롤
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
    }
  }

  const checkScroll = () => {
    if (
      document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - document.documentElement.scrollTop - 10
    ) {
      setAtBottom(true)
    } else {
      setAtBottom(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScroll)
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])
  return (
    <div className="min-h-screen h-auto absolute left-0 top-0 w-full">
      <Header />
      <button
        type="button"
        aria-label={atBottom ? '맨 위로' : '맨 밑으로'}
        className={`fixed right-10 bottom-28 z-30 w-12 h-12 rounded-full drop-shadow bg-main-theme
          flex justify-center items-center  
          hover:bg-main-theme-70 ${atBottom ? 'hover:-translate-y-1' : 'hover:translate-y-1'} transition-all
          max-xl:right-7 max-xl:w-10 max-xl:h-10 max-lg:bottom-20 max-md:bottom-12`}
        onClick={toggleScroll}
      >
        <FontAwesomeIcon
          size="lg"
          icon={faArrowDownLong}
          color="white"
          className={`transition-all ${atBottom ? 'rotate-180' : ''}`}
        />
      </button>

      <main className="px-5 pb-40">{children}</main>

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
    </div>
  )
}
