declare module '*.svg' {
  import React = require('react')

  const src: React.FC<React.SVGProps<SVGSVGElement>>
  export default src
}

declare module 'gatsby-plugin-breakpoints' {
  export function useBreakpoint(): {
    sm: boolean
    md: boolean
    lg: boolean
    xl: boolean
    // 여기에 더 많은 breakpoint 속성을 추가할 수 있습니다.
  }
}
