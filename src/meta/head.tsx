import Head from 'next/head'
import { JsonLd } from './jsonld'

const HeadComponent = () => (
  <Head>
    <title> Title </title>
    <meta name="description" content="Meta description" />
    
    <link
      rel="icon"
      href="https://cdn-icons-png.flaticon.com/128/6610/6610237.png"
      type="image/ico"
    />

    <link
      rel="apple-touch-icon"
      href="https://cdn-icons-png.flaticon.com/128/6610/6610237.png"
      type="image/ico"
    />

    <meta property="og:title" content="Social Title for Cool Page" />
    <meta
      property="og:description"
      content="And a social description for our cool page"
    />
    <meta
      property="og:image"
      content="https://example.com/images/cool-page.jpg"
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={JsonLd()}
      key="product-jsonld"
    />

    <script src="https://cdn.tailwindcss.com"></script>
  </Head>
)

export default HeadComponent