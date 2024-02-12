import React from 'react'

export default function MemberContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center">👥 팀원</h2>
      {children}
    </>
  )
}
