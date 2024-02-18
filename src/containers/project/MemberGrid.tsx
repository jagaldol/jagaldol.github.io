import React from 'react'
import Member from '@/containers/project/Member'
import { MemberType } from '@/types/project'

export default function MemberGrid({ members }: { members: MemberType[] }) {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr_2fr] max-lg:grid-cols-[1fr_2fr] items-center gap-5">
      {members.map((member) => (
        <Member member={member} />
      ))}
    </div>
  )
}
