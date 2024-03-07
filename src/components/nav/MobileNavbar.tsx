import React, { useState } from 'react'
import NavToggleButton from '@/components/nav/NavToggleButton'
import Navbar from '@/components/nav/Navbar'

export default function MobileNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <NavToggleButton isOpen={isNavOpen} toggle={() => setIsNavOpen(!isNavOpen)} />
      <Navbar isNavOpen={isNavOpen} close={() => setIsNavOpen(false)} />
    </>
  )
}
