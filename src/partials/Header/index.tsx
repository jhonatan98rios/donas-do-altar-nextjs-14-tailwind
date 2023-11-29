import Image from 'next/image'
import { Carousel } from "@/components/Carousel"
import { FlickityOptions } from "react-flickity-component"

const CarouselOptions: FlickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: 0,
  wrapAround: true,
  autoPlay: true,
}

export const Header = () => {
  return (
    <header className={`w-full sm:h-auto mt-[5rem] sm:mt-0`}>
      <Carousel flickityOptions={CarouselOptions}>
        <Image src="/header/01.png" alt="Um casal se beijando em frente a um lago" className="object-cover w-full h-[40vh] sm:h-[60vh]" width={1920} height={690}  />
        <Image src="/header/02.png" alt="Um noivo declarando seus votos à sua noiva, no altar" className="object-cover object-top w-full h-[40vh] sm:h-[60vh]" loading="lazy" width={1920} height={690} />
        <Image src="/header/03.png" alt="Um casal sorrindo, de frente para a camera" className="object-cover w-full h-[40vh] sm:h-[60vh]" loading="lazy" width={1920} height={690} />
        <Image src="/header/04.png" alt="Um casal sorrindo, de frente para o altar" className="object-cover w-full h-[40vh] sm:h-[60vh]" loading="lazy" width={1920} height={690} />
        <Image src="/header/05.png" alt="Um casal se beijando em frente a um jardim vertical" className="object-cover object-right-top w-full h-[40vh] sm:h-[60vh]" loading="lazy" width={1920} height={690} />
      </Carousel>
    </header>
  )
}