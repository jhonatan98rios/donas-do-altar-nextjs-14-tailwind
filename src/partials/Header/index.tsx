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
        <img src="/header/01.png" alt="Imagem de um casal de noivos se beijando" className="object-cover w-full h-[60vh]" />
        <img src="/header/02.png" alt="Um homem em frente  duas mulehres aplaudindo" className="object-cover w-full h-[60vh]" />
        <img src="/header/03.png" alt="Um casal se beijando em frente a um lago" className="object-cover w-full h-[60vh]" />
        <img src="/header/04.png" alt="Um casal sorrindo, de frente para o altar" className="object-cover w-full h-[60vh]" />
        <img src="/header/05.png" alt="Um casal se beijando dentro de um salão" className="object-cover w-full h-[60vh]" />
      </Carousel>
    </header>
  )
}