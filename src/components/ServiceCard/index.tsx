import Image from 'next/image'
import ResponsiveImage from '../ResponsiveImage'

type ServiceCardProps = {
  desktopUrl: string
  mobileUrl: string
  alt: string
  title: string
  description: string
}

export function ServiceCard({ desktopUrl, mobileUrl, alt, title, description }: ServiceCardProps) {

  return (
    <article className="w-72 sm:w-96 h-[32rem] sm:h-[36rem] bg-white flex flex-col p-4 mx-2 sm:mx-4 border border-solid border-gray-400">

      <ResponsiveImage
        alt={alt} 
        title={title} 
        desktopWidth={345} 
        desktopHeight={230}
        mobileWidth={254}
        mobileHeight={170}
        desktopUrl={desktopUrl}
        mobileUrl={mobileUrl}
      />

      <h2 className="my-3 md:my-5 text-xl sm:text-2xl text-gray-500">
        {title}
      </h2>

      <p 
        className="text-sm sm:text-base text-gray-500" 
        dangerouslySetInnerHTML={{ __html: description }} 
      />
    </article>
  )
}