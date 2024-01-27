import React from 'react'

export default function ProfileContent({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="pl-[20%] max-xl:pl-[10%] max-sm:pl-0">
      <h3 className="text-3xl py-5 max-md:text-lg max-md:pb-3">{title}</h3>
      <div className="max-md:text-xs">{children}</div>
    </div>
  )
}
