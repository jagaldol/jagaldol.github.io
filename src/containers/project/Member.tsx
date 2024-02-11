import React from 'react'

export default function Member({
  imageSrc,
  alt,
  name,
  description,
}: {
  imageSrc: string
  alt: string
  name: string
  description: string
}) {
  return (
    <>
      <div className="min-w-32 w-32 justify-self-end">
        <img className="rounded-full" src={imageSrc} alt={alt} />
      </div>
      <div className="flex flex-col">
        <h3 className="h3">{name}</h3>
        <p className="!my-0">{description}</p>
      </div>
    </>
  )
}
