import React from 'react'

export default function Stacks({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-center">🔧 사용 기술</h2>
      <div className="flex w-full justify-center my-10">
        <div className="flex justify-center flex-wrap gap-3 w-[1000px] max-lg:w-[700px] max-md:w-full">{children}</div>
      </div>
    </>
  )
}
