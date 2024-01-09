import Image from 'next/image'
import { Carousel } from "@/components/Carousel"
import { FlickityOptions } from "react-flickity-component"

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
    <header className={`w-full sm:h-auto mt-[5rem] sm:mt-0`}>
      <Carousel flickityOptions={CarouselOptions}>
        <Image sizes='100vw' src="/header/casal-por-do-sol.png" alt="Um casal se beijando em frente a um lago" title='Casal no lago com por do sol - Donas do altar' className="object-cover w-full h-[40vh] sm:h-[60vh]" width={1920} height={690}  />
        <Image sizes='100vw' src="/header/casal-altar.png" alt="Um noivo declarando seus votos à sua noiva, no altar" title='Casal no altar - Donas do altar' className="object-cover object-top w-full h-[40vh] sm:h-[60vh]" width={1920} height={690} />
        <Image sizes='100vw' src="/header/casal-evento.png" alt="Um casal sorrindo, de frente para a camera" title='Casal comemorando - Donas do altar' className="object-cover w-full h-[40vh] sm:h-[60vh]" width={1920} height={690} />
        <Image sizes='100vw' src="/header/casal-sorrindo.png" alt="Um casal sorrindo, de frente para o altar" title='Casal sorrindo - Donas do altar' className="object-cover w-full h-[40vh] sm:h-[60vh]" width={1920} height={690} />
        <Image sizes='100vw' src="/header/casal-se-beijando.png" alt="Um casal se beijando em frente a um jardim vertical" title='Casal se beijando - Donas do altar' className="object-cover object-right-top w-full h-[40vh] sm:h-[60vh]" width={1920} height={690} />
      </Carousel>
    </header>
  )
}