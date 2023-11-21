export const baseImage = (src: any[], alt: any, title: any) => ({ src, alt, title })


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