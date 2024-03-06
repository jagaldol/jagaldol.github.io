import React, { useEffect, useState } from 'react'
import NavToggleButton from '@/components/nav/NavToggleButton'
import Navbar from '@/components/nav/Navbar'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'

export default function MobileNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { lockScroll, openScroll } = useBodyScrollLock()

  useEffect(() => {
    if (isNavOpen) {
      lockScroll()
    } else {
      openScroll()
    }
    return () => {
      openScroll()
    }
  }, [isNavOpen])
  return (
    <>
      <NavToggleButton isOpen={isNavOpen} toggle={() => setIsNavOpen(!isNavOpen)} />
      <Navbar isNavOpen={isNavOpen} close={() => setIsNavOpen(false)} />
    </>
  )
}
