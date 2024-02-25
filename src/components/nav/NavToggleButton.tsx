import React from 'react'

export default function NavToggleButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button type="button" aria-label="메뉴" onClick={toggle} className="fixed top-4 right-5 h-6 p-1 z-[100]">
      {isOpen ? (
        <div
          className="relative w-6 h-[3px] bg-transparent
              transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500
              before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:left-0
              before:-rotate-45 before:top-0
              after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:left-0
              after:rotate-45 after:top-0"
        />
      ) : (
        <div
          className="relative w-6 h-[3px] bg-main-theme
              transition-all duration-500 before:transition-all before:duration-500 after:transition-all after:duration-500
              before:w-6 before:h-[3px] before:absolute before:bg-main-theme before:top-[9px] before:left-0
              after:w-6 after:h-[3px] after:absolute after:bg-main-theme after:-top-[9px] after:left-0"
        />
      )}
    </button>
  )
}
