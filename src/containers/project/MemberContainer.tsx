import React from 'react'

export default function MemberContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center">👥 팀원</h2>
      <div className="grid grid-cols-4 max-lg:grid-cols-2 items-center gap-5">{children}</div>
    </>
  )
}
