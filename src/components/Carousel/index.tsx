import Flickity from 'react-flickity-component'


type CarouselProps = {
  children?: React.ReactNode
}

const flickityOptions = {
  initialIndex: 1,
}

export function Carousel({ children }: CarouselProps) {

  return (
    <Flickity
      className={'carousel overflow-hidden'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      { children }
    </Flickity>
  )
}