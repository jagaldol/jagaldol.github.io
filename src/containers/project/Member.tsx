import React from 'react'
import { MemberType } from '@/types/project'

function LinkWrapper({ children, link }: { children: React.ReactNode; link?: string }) {
  return link ? <a href={link}>{children}</a> : children
}

export default function Member({ member }: { member: MemberType }) {
  return (
    <>
      <div className="min-w-32 w-32 min-h-32 h-32 max-md:min-w-20 max-md:w-20 max-md:min-h-20 max-md:h-20 justify-self-end">
        <LinkWrapper link={member.link}>
          {member.imageSrc ? (
            <img className="rounded-full border-slate-300 border" src={member.imageSrc} alt={`${member.name} 사진`} />
          ) : (
            <div className="w-full h-full rounded-full border-slate-300 border bg-white" />
          )}
        </LinkWrapper>
      </div>
      <div className="flex flex-col">
        <p className="text-xl max-md:text-base font-semibold my-2">{member.name}</p>
        <p className="!my-0">{member.description}</p>
      </div>
    </>
  )
}
