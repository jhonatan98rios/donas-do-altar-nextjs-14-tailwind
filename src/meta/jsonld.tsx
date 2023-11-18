export const JsonLd = () => {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "Nome da empresa",
      "legalName" : "Nome da Empresa Ltda",
      "url": "http://www.meusite.com.br", 
      "logo": "https://cdn-icons-png.flaticon.com/128/6610/6610237.png",
      "image": [
        "https://example.com/photos/1x1/photo.jpg",
        "https://example.com/photos/4x3/photo.jpg",
        "https://example.com/photos/16x9/photo.jpg"
      ],
      "description": "Placeholder Description",
      "sameAs": [
        "http://www.freebase.com/m/0_h96pq",
        "http://www.facebook.com/elitestrategies",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Contato",
        "telephone": "[+55-90000-0000]",
        "email": "email@gmail.com"
      },
    }
  `,
  }
}
