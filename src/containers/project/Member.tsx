import React from 'react'

export default function Member({ member }: { member: MemberType }) {
  return (
    <>
      <div className="min-w-32 w-32 max-md:min-w-20 max-md:w-20 justify-self-end">
        <img className="rounded-full" src={member.imageSrc} alt={`${member.name} 사진`} />
      </div>
      <div className="flex flex-col">
        <p className="text-xl max-md:text-base font-semibold my-2">{member.name}</p>
        <p className="!my-0">{member.description}</p>
      </div>
    </>
  )
}
