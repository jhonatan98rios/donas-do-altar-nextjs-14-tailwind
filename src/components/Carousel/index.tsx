'use client'

import Flickity, { FlickityOptions } from 'react-flickity-component'

type CarouselProps = {
  children?: React.ReactNode
  flickityOptions?: FlickityOptions
}

const defaultFlickityOptions: FlickityOptions = {
  pageDots: false,
  prevNextButtons: true,
  initialIndex: (typeof window !== "undefined") && (window.innerWidth <= 768) ? 0 : 1,
  cellAlign: 'center',
  lazyLoad: true
}

export function Carousel({ children, flickityOptions }: CarouselProps) {

  const mergedFlickityOptions = {
    ...defaultFlickityOptions,
    ...flickityOptions
  }

  return (
    <Flickity
      className={'flickity-carousel overflow-hidden outline-none'} // default ''
      elementType={'div'} // default 'div'
      options={mergedFlickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      static // default false
    >
      {children}
    </Flickity>
  )
}