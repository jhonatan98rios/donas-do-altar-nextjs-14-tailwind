import { Carousel } from "@/components/Carousel"
import { FlickityOptions } from "react-flickity-component"
import ResponsiveImage from '@/components/ResponsiveImage'

const CarouselOptions: FlickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: 0,
  wrapAround: true,
  autoPlay: true,
  lazyLoad: true
}

export const Header = () => {
  return (
    <header className={`w-full sm:h-auto h-[450px] mt-[5rem] sm:mt-0`}>
      <Carousel flickityOptions={CarouselOptions}>
        <ResponsiveImage
          className="object-cover w-full h-[450px] md:h-[690px] 2xl:h-[60vh] 2xl:w-[100vw]"
          alt="Um casal se beijando em frente a um lago" 
          title="Casal no lago com por do sol - Donas do altar" 
          desktopWidth={1920} 
          desktopHeight={920}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-por-do-sol.webp"
          mobileUrl="/header/mobile/casal-por-do-sol.webp"
        />

        <ResponsiveImage
          className="object-cover object-top w-full h-[450px] md:h-[690px] 2xl:h-[60vh] 2xl:w-[100vw]"
          alt="Um noivo declarando seus votos à sua noiva, no altar" 
          title='Casal no altar - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={920}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-altar.webp"
          mobileUrl="/header/mobile/casal-altar.webp"
        />

        <ResponsiveImage
          className="object-cover w-full h-[450px] md:h-[690px] 2xl:h-[60vh] 2xl:w-[100vw]"
          alt="Um casal sorrindo, de frente para a camera" 
          title='Casal comemorando - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={920}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-evento.webp"
          mobileUrl="/header/mobile/casal-evento.webp"
        />

        <ResponsiveImage
          className="object-cover w-full h-[450px] md:h-[690px] 2xl:h-[60vh] 2xl:w-[100vw]"
          alt="Um casal sorrindo, de frente para o altar" 
          title='Casal sorrindo - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={920}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-sorrindo.webp"
          mobileUrl="/header/mobile/casal-sorrindo.webp"
        />
        
        <ResponsiveImage
          className="object-cover object-right-top w-full h-[450px] md:h-[690px] 2xl:h-[60vh] 2xl:w-[100vw]"
          alt="Um casal se beijando em frente a um jardim vertical" 
          title='Casal se beijando - Donas do altar'
          desktopWidth={1920} 
          desktopHeight={920}
          mobileWidth={620}
          mobileHeight={450}
          desktopUrl="/header/casal-se-beijando.webp"
          mobileUrl="/header/mobile/casal-se-beijando.webp"
        />
      </Carousel>
    </header>
  )
}