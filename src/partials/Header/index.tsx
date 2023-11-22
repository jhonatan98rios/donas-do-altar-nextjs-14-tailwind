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
        <img src="/header/01.png" alt="" className="object-contain" />
        <img src="/header/02.png" alt="" className="object-contain" />
        <img src="/header/03.png" alt="" className="object-contain" />
        <img src="/header/04.png" alt="" className="object-contain" />
        <img src="/header/05.png" alt="" className="object-contain" />
      </Carousel>
    </header>
  )
}