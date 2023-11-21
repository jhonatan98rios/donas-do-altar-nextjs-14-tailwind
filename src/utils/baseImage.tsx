export const baseImage = (src: Source[], alt: any, title: any): BaseImage => ({ src, alt, title })

export type BaseImage = { 
  src: Source[], 
  alt: string, 
  title: string
}

export type Source = {
  src: string
  query?: string
}

/* 
Exemplo

const content = baseImage([
  { src: "/mobile.png, /mobile@2x.png 2x" },
  { src: "/desktop.png, /desktop@2x.png 2x", query: '(min-width: 769px)' }
], "Receba uma oferta personalizada", "");

<ResponsiveImage
  sources={content.src}
  alt={content.alt}
/>

*/