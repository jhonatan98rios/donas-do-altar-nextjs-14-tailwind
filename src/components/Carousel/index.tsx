import Flickity from 'react-flickity-component'


type CarouselProps = {
  children?: React.ReactNode
}

const flickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: 0,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        initialIndex: 1,
      }
    }
  ]
}

export function Carousel({ children }: CarouselProps) {

  return (
    <Flickity
      className={'carousel overflow-hidden'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      static // default false
    >
      {children}
    </Flickity>
  )
}