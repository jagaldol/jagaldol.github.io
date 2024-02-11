import React from 'react'

export default function Badge({ name, autoHeight = false }: { name: string; autoHeight?: boolean }) {
  const src = `https://img.shields.io/badge/-${name}-FFFFFF?style=for-the-badge&logo=${name}&logoColor=black`
  return <img src={src} alt={name} className={`drop - shadow ${autoHeight ? '' : 'object-contain w-full h-full'}`} />
}
