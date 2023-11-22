'use client'

import Flickity, { FlickityOptions } from 'react-flickity-component'

type CarouselProps = {
  children?: React.ReactNode
  flickityOptions?: FlickityOptions
}

const defaultFlickityOptions: FlickityOptions = {
  pageDots: true,
  prevNextButtons: true,
  initialIndex: (typeof window !== "undefined") && (window.innerWidth <= 768) ? 0 : 1,
  cellAlign: 'center',
}

export function Carousel({ children, flickityOptions }: CarouselProps) {

  const mergedFlickityOptions = {
    ...defaultFlickityOptions,
    ...flickityOptions
  }

  return (
    <Flickity
      className={'carousel overflow-hidden'} // default ''
      elementType={'div'} // default 'div'
      options={mergedFlickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      static // default false
    >
      {children}
    </Flickity>
  )
}