import Head from 'next/head'
import Script from 'next/script'
import { JsonLd } from './jsonld'

const HeadComponent = () => (
  <Head>
    <title> Donas do Altar - Assessoria & Cerimonial </title>

    <meta 
      name="description" 
      content="Assessoria e Cerimonial irá desenvolver todo o programa para eternizar este dia tão especial. Para isso, contam com uma equipe de profissionais apaixonadas pelo trabalho e atendem a seus clientes de forma personalizada. Tudo que vocês sempre sonharam para este dia será transformado em realidade." 
    />

    <meta 
      name="keywords" 
      content="donas do altar, assessoria e cerimonial, assessoria matrimonial, assessoria completa, assessoria personalizada, assessoria final, assessoria e cerimonial, curso de assessoria, casamento, assessoria, cerimonial, matrimonial, debutantes, eventos sociais e coorporativos, eventos, festas, celebração" 
    />
    
    <link
      rel="icon"
      href="./favicon/favicon.ico"
      type="image/ico"
    />

    <link
      rel="apple-touch-icon"
      href="./favicon/apple-touch-icon.png"
      type="image/png"
    />

    <meta 
      name="viewport" 
      content="width=device-width, initial-scale=1.0" 
    />

    <meta 
      property="og:title" 
      content="Donas do Altar - Assessoria & Cerimonial" 
    />

    <meta
      property="og:description"
      content="Assessoria e Cerimonial irá desenvolver todo o programa para eternizar este dia tão especial. Para isso, contam com uma equipe de profissionais apaixonadas pelo trabalho e atendem a seus clientes de forma personalizada. Tudo que vocês sempre sonharam para este dia será transformado em realidade."
    />
    <meta
      property="og:image"
      content="./favicon/favicon-32x32.png"
    />

    <link rel="manifest" href="./favicon/site.webmanifest" />

    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={JsonLd()}
      key="product-jsonld"
    />
    
    <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />

    <link rel="sitemap" type="application/xml" title="Sitemap" href="./sitemap.xml" />
  </Head>
)

export default HeadComponent