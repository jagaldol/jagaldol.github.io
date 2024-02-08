import React from 'react'

export default function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col my-12">
      <h2 className="text-center py-20 text-5xl max-md:text-3xl">{title}</h2>
      {children}
    </div>
  )
}
