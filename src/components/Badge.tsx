import React from 'react'

export default function Badge({ name }: { name: string }) {
  const src = `https://img.shields.io/badge/-${name}-FFFFFF?style=for-the-badge&logo=${name}&logoColor=black`
  return <img src={src} alt={name} className="drop-shadow" />
}
