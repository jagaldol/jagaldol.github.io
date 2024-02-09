import React from 'react'

export default function Badge({ name, color }: { name: string; color?: string }) {
  color
  const src = `https://img.shields.io/badge/-${name}-${color || 'F1F1F5'}?style=for-the-badge&logo=${name}&logoColor=black`
  return <img src={src} alt={name} />
}
