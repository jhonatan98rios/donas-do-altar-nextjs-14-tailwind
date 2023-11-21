'use client'

import Flickity, { FlickityOptions } from 'react-flickity-component'

type CarouselProps = {
  children?: React.ReactNode
}

const flickityOptions: FlickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: (typeof window !== "undefined") && (window.innerWidth <= 768) ? 0 : 1,
  cellAlign: 'center',
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