declare module '*.module.css';

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';

declare module '*.svg' {
  import type React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare const __IS_DEV__: boolean
