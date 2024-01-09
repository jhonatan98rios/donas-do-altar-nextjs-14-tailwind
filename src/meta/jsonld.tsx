export const JsonLd = () => {
  return {
    __html: `{
      "@context": "https://schema.org/",
      "@type": "Organization",
      "name": "Donas do Altar",
      "legalName" : "Milene Crucello Nunes Alvarenga",
      "url": "https://donasdoaltar.com.br", 
      "logo": "https://donasdoaltar.com.br/logo.png",
      "image": [
        "https://donasdoaltar.com.br/header/01.png",
        "https://donasdoaltar.com.br/header/02.png",
        "https://donasdoaltar.com.br/header/03.png",
      ],
      "description": "Assessoria e Cerimonial irá desenvolver todo o programa para eternizar este dia tão especial. Para isso, contam com uma equipe de profissionais apaixonadas pelo trabalho e atendem a seus clientes de forma personalizada. Tudo que vocês sempre sonharam para este dia será transformado em realidade.",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Contato",
        "telephone": "[+55-11-97287-9578]",
        "email": "milene@donasdoaltar.com.br"
      },
    }
  `,
  }
}
