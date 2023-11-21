type Source = {
  src: string
  query?: string
}

type ResponsiveImageprops = {
  sources: Array<Source>
  alt: string
  title?: string
  lazyload?: boolean
  className?: string
}

export function ResponsiveImage({ sources, alt, title, className, lazyload = true }: ResponsiveImageprops) {

  return (
    <picture className={className}>
      {sources.map((source, index) => (
        <>
          <source
            data-srcset={lazyload ? source.src : null}
            srcSet={lazyload ? undefined : source.src}
            media={source.query}
            key={index}
          />

          <img
            className=""
            src={sources[0].src.split(',')[0]}
            srcSet={sources[0].src}
            alt={alt}
            title={title}
          />
        </>
      ))}
    </picture>
  )
}

