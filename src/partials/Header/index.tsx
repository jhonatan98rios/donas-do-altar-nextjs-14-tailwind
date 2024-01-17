import { Carousel } from "@/components/Carousel"
import { FlickityOptions } from "react-flickity-component"
import ResponsiveImage from '@/components/ResponsiveImage'

const CarouselOptions: FlickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: 0,
  wrapAround: true,
  autoPlay: false,
  lazyLoad: true
}

export const Header = () => {
  return (
    <header className={`w-full sm:h-auto mt-[5rem] sm:mt-0`}>
      <Carousel flickityOptions={CarouselOptions}>
        <ResponsiveImage
          className="object-cover w-full h-[450px]"
          alt="Um casal se beijando em frente a um lago" 
          title="Casal no lago com por do sol - Donas do altar" 
          desktopWidth={1920} 
          desktopHeight={690}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-por-do-sol.png"
          mobileUrl="/header/mobile/casal-por-do-sol.png"
        />

        <ResponsiveImage
          className="object-cover object-top w-full h-[450px]"
          alt="Um noivo declarando seus votos à sua noiva, no altar" 
          title='Casal no altar - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={690}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-altar.png"
          mobileUrl="/header/mobile/casal-altar.png"
        />

        <ResponsiveImage
          className="object-cover w-full h-[450px]"
          alt="Um casal sorrindo, de frente para a camera" 
          title='Casal comemorando - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={690}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-evento.png"
          mobileUrl="/header/mobile/casal-evento.png"
        />

        <ResponsiveImage
          className="object-cover w-full h-[450px]"
          alt="Um casal sorrindo, de frente para o altar" 
          title='Casal sorrindo - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={690}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-sorrindo.png"
          mobileUrl="/header/mobile/casal-sorrindo.png"
        />
        
        <ResponsiveImage
          className="object-cover object-right-top w-full h-[450px]"
          alt="Um casal se beijando em frente a um jardim vertical" 
          title='Casal se beijando - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={690}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-se-beijando.png"
          mobileUrl="/header/mobile/casal-se-beijando.png"
        />
      </Carousel>
    </header>
  )
}